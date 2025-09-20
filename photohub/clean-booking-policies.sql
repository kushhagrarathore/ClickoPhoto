-- CLEAN SLATE: Remove ALL existing policies and create clean ones
-- Run this in Supabase SQL Editor

-- ============================================
-- 1. DROP ALL EXISTING POLICIES
-- ============================================
DROP POLICY IF EXISTS "Customers can create bookings" ON public.bookings;
DROP POLICY IF EXISTS "Customers can create bookings for themselves" ON public.bookings;
DROP POLICY IF EXISTS "Customers can view own bookings" ON public.bookings;
DROP POLICY IF EXISTS "Customers can view their bookings" ON public.bookings;
DROP POLICY IF EXISTS "Hosts can insert bookings" ON public.bookings;
DROP POLICY IF EXISTS "Hosts can update their bookings" ON public.bookings;
DROP POLICY IF EXISTS "Hosts can view bookings for their services" ON public.bookings;
DROP POLICY IF EXISTS "Hosts can view own bookings" ON public.bookings;
DROP POLICY IF EXISTS "Hosts can view their bookings" ON public.bookings;
DROP POLICY IF EXISTS "Hosts can view their service bookings" ON public.bookings;
DROP POLICY IF EXISTS "Parties can update booking status" ON public.bookings;
DROP POLICY IF EXISTS "Parties can update bookings" ON public.bookings;
DROP POLICY IF EXISTS "Users can create bookings" ON public.bookings;
DROP POLICY IF EXISTS "Users can create their own bookings" ON public.bookings;
DROP POLICY IF EXISTS "Users can insert bookings" ON public.bookings;
DROP POLICY IF EXISTS "Users can insert own bookings" ON public.bookings;
DROP POLICY IF EXISTS "Users can insert their own bookings" ON public.bookings;
DROP POLICY IF EXISTS "Users can select their own bookings" ON public.bookings;
DROP POLICY IF EXISTS "Users can update own bookings" ON public.bookings;
DROP POLICY IF EXISTS "Users can view own bookings" ON public.bookings;
DROP POLICY IF EXISTS "Users can view their own bookings" ON public.bookings;
DROP POLICY IF EXISTS "b_insert_customer" ON public.bookings;
DROP POLICY IF EXISTS "b_select_customer" ON public.bookings;
DROP POLICY IF EXISTS "b_select_host" ON public.bookings;
DROP POLICY IF EXISTS "b_update_parties" ON public.bookings;
DROP POLICY IF EXISTS "bookings_insert_customer" ON public.bookings;
DROP POLICY IF EXISTS "bookings_own" ON public.bookings;
DROP POLICY IF EXISTS "bookings_select_own" ON public.bookings;
DROP POLICY IF EXISTS "bookings_update_parties" ON public.bookings;
DROP POLICY IF EXISTS "customer_can_insert_bookings" ON public.bookings;
DROP POLICY IF EXISTS "customer_can_select_bookings" ON public.bookings;
DROP POLICY IF EXISTS "host_can_access_own_booking" ON public.bookings;
DROP POLICY IF EXISTS "host_read_bookings" ON public.bookings;
DROP POLICY IF EXISTS "host_update_bookings" ON public.bookings;
DROP POLICY IF EXISTS "insert_own_booking" ON public.bookings;
DROP POLICY IF EXISTS "public_read_bookings" ON public.bookings;
DROP POLICY IF EXISTS "select_bookings" ON public.bookings;
DROP POLICY IF EXISTS "update_host_or_user" ON public.bookings;
DROP POLICY IF EXISTS "user_can_access_own_booking" ON public.bookings;
DROP POLICY IF EXISTS "user_cancel_bookings" ON public.bookings;
DROP POLICY IF EXISTS "user_insert_bookings" ON public.bookings;
DROP POLICY IF EXISTS "user_read_bookings" ON public.bookings;

-- ============================================
-- 2. CREATE CLEAN, SIMPLE POLICIES
-- ============================================

-- INSERT: Only customers can create bookings
CREATE POLICY "clean_insert_customer" ON public.bookings
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- SELECT: Customers and hosts can view their bookings
CREATE POLICY "clean_select_parties" ON public.bookings
    FOR SELECT USING (
        auth.uid() = user_id OR 
        auth.uid() = (SELECT user_id FROM host_profiles WHERE id = host_id)
    );

-- UPDATE: Customers and hosts can update their bookings
CREATE POLICY "clean_update_parties" ON public.bookings
    FOR UPDATE USING (
        auth.uid() = user_id OR 
        auth.uid() = (SELECT user_id FROM host_profiles WHERE id = host_id)
    );

-- ============================================
-- 3. VERIFY CLEAN POLICIES
-- ============================================
SELECT schemaname, tablename, policyname, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'bookings'
ORDER BY policyname;



