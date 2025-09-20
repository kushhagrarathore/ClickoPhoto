-- Fix RLS policies for bookings table to work with profile IDs instead of auth user IDs
-- This script updates the policies to properly handle the foreign key relationships

-- Drop existing conflicting policies
DROP POLICY IF EXISTS "bookings_insert_user" ON public.bookings;
DROP POLICY IF EXISTS "bookings_select_user" ON public.bookings;
DROP POLICY IF EXISTS "bookings_select_host" ON public.bookings;
DROP POLICY IF EXISTS "bookings_update_user" ON public.bookings;
DROP POLICY IF EXISTS "bookings_update_host" ON public.bookings;
DROP POLICY IF EXISTS "clean_insert_customer" ON public.bookings;
DROP POLICY IF EXISTS "clean_select_parties" ON public.bookings;
DROP POLICY IF EXISTS "clean_update_parties" ON public.bookings;

-- Create new policies that work with profile IDs
-- Users can insert bookings where they are the customer (user_id matches their profile)
CREATE POLICY "bookings_insert_customer" ON public.bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE user_profiles.id = bookings.user_id 
      AND user_profiles.user_id = auth.uid()
    )
  );

-- Users can select bookings where they are either the customer or the host
CREATE POLICY "bookings_select_customer_host" ON public.bookings
  FOR SELECT
  TO authenticated
  USING (
    -- Customer can see their bookings
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE user_profiles.id = bookings.user_id 
      AND user_profiles.user_id = auth.uid()
    )
    OR
    -- Host can see bookings for their services
    EXISTS (
      SELECT 1 FROM public.host_profiles 
      WHERE host_profiles.id = bookings.host_id 
      AND host_profiles.user_id = auth.uid()
    )
  );

-- Users can update bookings where they are either the customer or the host
CREATE POLICY "bookings_update_customer_host" ON public.bookings
  FOR UPDATE
  TO authenticated
  USING (
    -- Customer can update their bookings
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE user_profiles.id = bookings.user_id 
      AND user_profiles.user_id = auth.uid()
    )
    OR
    -- Host can update bookings for their services
    EXISTS (
      SELECT 1 FROM public.host_profiles 
      WHERE host_profiles.id = bookings.host_id 
      AND host_profiles.user_id = auth.uid()
    )
  )
  WITH CHECK (
    -- Same conditions for the updated data
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE user_profiles.id = bookings.user_id 
      AND user_profiles.user_id = auth.uid()
    )
    OR
    EXISTS (
      SELECT 1 FROM public.host_profiles 
      WHERE host_profiles.id = bookings.host_id 
      AND host_profiles.user_id = auth.uid()
    )
  );

-- Enable RLS on bookings table
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
