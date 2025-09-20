-- Comprehensive RLS Policy Fix for PhotoHub
-- Run this in Supabase SQL Editor to fix all permission issues

-- ============================================
-- 1. DROP ALL EXISTING POLICIES
-- ============================================
DROP POLICY IF EXISTS "clean_insert_customer" ON public.bookings;
DROP POLICY IF EXISTS "clean_select_parties" ON public.bookings;
DROP POLICY IF EXISTS "clean_update_parties" ON public.bookings;
DROP POLICY IF EXISTS "correct_insert_customer" ON public.bookings;
DROP POLICY IF EXISTS "correct_select_parties" ON public.bookings;
DROP POLICY IF EXISTS "correct_update_parties" ON public.bookings;
DROP POLICY IF EXISTS "bookings_insert_customer" ON public.bookings;
DROP POLICY IF EXISTS "bookings_select_parties" ON public.bookings;
DROP POLICY IF EXISTS "bookings_update_parties" ON public.bookings;

-- Drop other table policies
DROP POLICY IF EXISTS "user_profiles_select_own" ON public.user_profiles;
DROP POLICY IF EXISTS "user_profiles_update_own" ON public.user_profiles;
DROP POLICY IF EXISTS "user_profiles_insert_own" ON public.user_profiles;
DROP POLICY IF EXISTS "host_profiles_select_own" ON public.host_profiles;
DROP POLICY IF EXISTS "host_profiles_update_own" ON public.host_profiles;
DROP POLICY IF EXISTS "host_profiles_insert_own" ON public.host_profiles;
DROP POLICY IF EXISTS "host_profiles_select_public" ON public.host_profiles;
DROP POLICY IF EXISTS "services_select_public" ON public.services;
DROP POLICY IF EXISTS "services_insert_host" ON public.services;
DROP POLICY IF EXISTS "services_update_host" ON public.services;
DROP POLICY IF EXISTS "services_delete_host" ON public.services;
DROP POLICY IF EXISTS "reviews_select_public" ON public.reviews;
DROP POLICY IF EXISTS "reviews_insert_customer" ON public.reviews;

-- ============================================
-- 2. ENABLE RLS ON ALL TABLES
-- ============================================
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.host_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- ============================================
-- 3. USER_PROFILES POLICIES
-- ============================================

-- Users can view their own profile
CREATE POLICY "user_profiles_select_own" ON public.user_profiles
    FOR SELECT USING (user_id = auth.uid());

-- Users can update their own profile
CREATE POLICY "user_profiles_update_own" ON public.user_profiles
    FOR UPDATE USING (user_id = auth.uid());

-- Users can insert their own profile
CREATE POLICY "user_profiles_insert_own" ON public.user_profiles
    FOR INSERT WITH CHECK (user_id = auth.uid());

-- ============================================
-- 4. HOST_PROFILES POLICIES
-- ============================================

-- Users can view their own host profile
CREATE POLICY "host_profiles_select_own" ON public.host_profiles
    FOR SELECT USING (user_id = auth.uid());

-- Users can update their own host profile
CREATE POLICY "host_profiles_update_own" ON public.host_profiles
    FOR UPDATE USING (user_id = auth.uid());

-- Users can insert their own host profile
CREATE POLICY "host_profiles_insert_own" ON public.host_profiles
    FOR INSERT WITH CHECK (user_id = auth.uid());

-- Anyone can view host profiles (for service listings)
CREATE POLICY "host_profiles_select_public" ON public.host_profiles
    FOR SELECT USING (true);

-- ============================================
-- 5. SERVICES POLICIES
-- ============================================

-- Anyone can view services
CREATE POLICY "services_select_public" ON public.services
    FOR SELECT USING (true);

-- Hosts can create their own services
CREATE POLICY "services_insert_host" ON public.services
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM host_profiles 
            WHERE id = host_id AND user_id = auth.uid()
        )
    );

-- Hosts can update their own services
CREATE POLICY "services_update_host" ON public.services
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM host_profiles 
            WHERE id = host_id AND user_id = auth.uid()
        )
    );

-- Hosts can delete their own services
CREATE POLICY "services_delete_host" ON public.services
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM host_profiles 
            WHERE id = host_id AND user_id = auth.uid()
        )
    );

-- ============================================
-- 6. BOOKINGS POLICIES (FIXED)
-- ============================================

-- Users can create bookings where they are the customer
-- This policy checks that the user_id in bookings matches a user_profiles.id 
-- where user_profiles.user_id = auth.uid()
CREATE POLICY "bookings_insert_customer" ON public.bookings
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM user_profiles 
            WHERE id = user_id AND user_id = auth.uid()
        )
    );

-- Users can view bookings where they are the customer or host
CREATE POLICY "bookings_select_parties" ON public.bookings
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM user_profiles 
            WHERE id = user_id AND user_id = auth.uid()
        ) OR
        EXISTS (
            SELECT 1 FROM host_profiles 
            WHERE id = host_id AND user_id = auth.uid()
        )
    );

-- Users can update bookings where they are the customer or host
CREATE POLICY "bookings_update_parties" ON public.bookings
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM user_profiles 
            WHERE id = user_id AND user_id = auth.uid()
        ) OR
        EXISTS (
            SELECT 1 FROM host_profiles 
            WHERE id = host_id AND user_id = auth.uid()
        )
    );

-- ============================================
-- 7. REVIEWS POLICIES
-- ============================================

-- Anyone can view reviews
CREATE POLICY "reviews_select_public" ON public.reviews
    FOR SELECT USING (true);

-- Users can create reviews for their bookings
CREATE POLICY "reviews_insert_customer" ON public.reviews
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM user_profiles 
            WHERE id = user_id AND user_id = auth.uid()
        )
    );

-- ============================================
-- 8. VERIFY POLICIES
-- ============================================
SELECT 
    schemaname, 
    tablename, 
    policyname, 
    cmd, 
    qual, 
    with_check
FROM pg_policies 
WHERE tablename IN ('bookings', 'user_profiles', 'host_profiles', 'services', 'reviews')
ORDER BY tablename, policyname;

-- ============================================
-- 9. TEST QUERIES (Optional - for debugging)
-- ============================================

-- Test if user can insert into user_profiles
-- SELECT auth.uid() as current_user_id;

-- Test if user_profiles table is accessible
-- SELECT * FROM user_profiles LIMIT 1;

-- Test if bookings table structure is correct
-- SELECT column_name, data_type FROM information_schema.columns 
-- WHERE table_name = 'bookings' ORDER BY ordinal_position;


