-- Fix RLS Policies for Bookings Based on Current Schema
-- Run this in Supabase SQL Editor

-- ============================================
-- 1. ENABLE RLS ON BOOKINGS TABLE
-- ============================================
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- ============================================
-- 2. DROP EXISTING POLICIES (if they exist)
-- ============================================
DROP POLICY IF EXISTS "users_can_create_bookings" ON public.bookings;
DROP POLICY IF EXISTS "users_can_view_own_bookings" ON public.bookings;
DROP POLICY IF EXISTS "users_can_update_own_bookings" ON public.bookings;
DROP POLICY IF EXISTS "bookings_select_own" ON public.bookings;
DROP POLICY IF EXISTS "bookings_insert_customer" ON public.bookings;
DROP POLICY IF EXISTS "bookings_update_parties" ON public.bookings;

-- ============================================
-- 3. CREATE NEW POLICIES FOR CURRENT SCHEMA
-- ============================================

-- INSERT Policy: Users can create bookings where they are the customer
CREATE POLICY "bookings_insert_customer" ON public.bookings
    FOR INSERT WITH CHECK (
        auth.uid() = (
            SELECT user_id FROM public.user_profiles 
            WHERE id = user_id
        )
    );

-- SELECT Policy: Users can view bookings where they are customer or host
CREATE POLICY "bookings_select_own" ON public.bookings
    FOR SELECT USING (
        auth.uid() = (
            SELECT user_id FROM public.user_profiles 
            WHERE id = user_id
        ) OR
        auth.uid() = (
            SELECT user_id FROM public.host_profiles 
            WHERE id = host_id
        )
    );

-- UPDATE Policy: Users can update bookings where they are customer or host
CREATE POLICY "bookings_update_parties" ON public.bookings
    FOR UPDATE USING (
        auth.uid() = (
            SELECT user_id FROM public.user_profiles 
            WHERE id = user_id
        ) OR
        auth.uid() = (
            SELECT user_id FROM public.host_profiles 
            WHERE id = host_id
        )
    );

-- ============================================
-- 4. VERIFY POLICIES ARE CREATED
-- ============================================
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'bookings';



