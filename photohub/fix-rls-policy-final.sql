-- Fix RLS Policy to match the actual data structure
-- Run this in Supabase SQL Editor

-- ============================================
-- 1. DROP EXISTING POLICIES
-- ============================================
DROP POLICY IF EXISTS "clean_insert_customer" ON public.bookings;
DROP POLICY IF EXISTS "clean_select_parties" ON public.bookings;
DROP POLICY IF EXISTS "clean_update_parties" ON public.bookings;
DROP POLICY IF EXISTS "correct_insert_customer" ON public.bookings;
DROP POLICY IF EXISTS "correct_select_parties" ON public.bookings;
DROP POLICY IF EXISTS "correct_update_parties" ON public.bookings;

-- ============================================
-- 2. ENABLE RLS ON ALL TABLES
-- ============================================
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.host_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- ============================================
-- 3. CREATE CORRECT POLICIES FOR BOOKINGS
-- ============================================

-- INSERT: Users can create bookings where they are the customer
CREATE POLICY "bookings_insert_customer" ON public.bookings
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM user_profiles 
            WHERE id = user_id AND user_id = auth.uid()
        )
    );

-- SELECT: Users can view bookings where they are the customer or host
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

-- UPDATE: Users can update bookings where they are the customer or host
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
-- 4. CREATE POLICIES FOR USER_PROFILES
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
-- 5. CREATE POLICIES FOR HOST_PROFILES
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
-- 6. CREATE POLICIES FOR SERVICES
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
-- 7. CREATE POLICIES FOR REVIEWS
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
SELECT schemaname, tablename, policyname, cmd, qual, with_check
FROM pg_policies 
WHERE tablename IN ('bookings', 'user_profiles', 'host_profiles', 'services', 'reviews')
ORDER BY tablename, policyname;

