-- PhotoDroneHire Database Setup for Supabase
-- Run these queries in your Supabase SQL Editor

-- ============================================
-- 1. CREATE ENUMS
-- ============================================

-- User Role Enum
CREATE TYPE user_role AS ENUM ('CUSTOMER', 'HOST', 'ADMIN');

-- Service Type Enum
CREATE TYPE service_type AS ENUM ('PHOTOGRAPHY', 'VIDEOGRAPHY', 'DRONE', 'STUDIO');

-- Portfolio Category Enum
CREATE TYPE portfolio_category AS ENUM ('WEDDING', 'CORPORATE', 'BIRTHDAY', 'AERIAL', 'OTHER');

-- Pricing Type Enum
CREATE TYPE pricing_type AS ENUM ('HOURLY', 'DAILY');

-- Booking Status Enum
CREATE TYPE booking_status AS ENUM ('PENDING', 'CONFIRMED', 'DECLINED', 'CANCELLED', 'COMPLETED');

-- Payout Status Enum
CREATE TYPE payout_status AS ENUM ('PENDING', 'PAID');

-- ============================================
-- 2. CREATE TABLES
-- ============================================

-- Users Table (extends Supabase auth.users)
CREATE TABLE public.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    image TEXT,
    role user_role DEFAULT 'CUSTOMER',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Host Profiles Table
CREATE TABLE public.host_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID UNIQUE NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    bio TEXT,
    years_experience INTEGER,
    services service_type[],
    equipment TEXT[],
    city TEXT,
    rating_avg DECIMAL(2,1) DEFAULT 0.0,
    rating_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Portfolio Items Table
CREATE TABLE public.portfolio_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    host_id UUID NOT NULL REFERENCES public.host_profiles(id) ON DELETE CASCADE,
    url TEXT NOT NULL,
    caption TEXT,
    category portfolio_category NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Pricing Table
CREATE TABLE public.pricing (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    host_id UUID NOT NULL REFERENCES public.host_profiles(id) ON DELETE CASCADE,
    hourly_rate DECIMAL(10,2),
    daily_rate DECIMAL(10,2),
    packages JSONB, -- Array of {name, desc, price}
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Availability Slots Table
CREATE TABLE public.availability_slots (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    host_id UUID NOT NULL REFERENCES public.host_profiles(id) ON DELETE CASCADE,
    start_time TIMESTAMPTZ NOT NULL,
    end_time TIMESTAMPTZ NOT NULL,
    is_blocked BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Listings Table
CREATE TABLE public.listings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    host_id UUID NOT NULL REFERENCES public.host_profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    base_city TEXT,
    tags TEXT[],
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Bookings Table
CREATE TABLE public.bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    listing_id UUID NOT NULL REFERENCES public.listings(id) ON DELETE CASCADE,
    customer_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    host_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    start_time TIMESTAMPTZ NOT NULL,
    end_time TIMESTAMPTZ NOT NULL,
    pricing_type pricing_type NOT NULL,
    hours INTEGER,
    subtotal DECIMAL(10,2) NOT NULL,
    fees DECIMAL(10,2) NOT NULL,
    tax DECIMAL(10,2) NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    status booking_status DEFAULT 'PENDING',
    payment_ref TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Reviews Table
CREATE TABLE public.reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id UUID UNIQUE NOT NULL REFERENCES public.bookings(id) ON DELETE CASCADE,
    customer_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    photos TEXT[], -- Array of photo URLs
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Payouts Table
CREATE TABLE public.payouts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    host_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    amount DECIMAL(10,2) NOT NULL,
    status payout_status DEFAULT 'PENDING',
    requested_at TIMESTAMPTZ DEFAULT NOW(),
    paid_at TIMESTAMPTZ
);

-- ============================================
-- 3. CREATE INDEXES FOR PERFORMANCE
-- ============================================

-- Users indexes
CREATE INDEX idx_users_email ON public.users(email);
CREATE INDEX idx_users_role ON public.users(role);

-- Host profiles indexes
CREATE INDEX idx_host_profiles_user_id ON public.host_profiles(user_id);
CREATE INDEX idx_host_profiles_city ON public.host_profiles(city);
CREATE INDEX idx_host_profiles_rating ON public.host_profiles(rating_avg DESC);

-- Portfolio items indexes
CREATE INDEX idx_portfolio_items_host_id ON public.portfolio_items(host_id);
CREATE INDEX idx_portfolio_items_category ON public.portfolio_items(category);

-- Pricing indexes
CREATE INDEX idx_pricing_host_id ON public.pricing(host_id);

-- Availability slots indexes
CREATE INDEX idx_availability_slots_host_id ON public.availability_slots(host_id);
CREATE INDEX idx_availability_slots_time ON public.availability_slots(start_time, end_time);

-- Listings indexes
CREATE INDEX idx_listings_host_id ON public.listings(host_id);
CREATE INDEX idx_listings_active ON public.listings(is_active);
CREATE INDEX idx_listings_city ON public.listings(base_city);

-- Bookings indexes
CREATE INDEX idx_bookings_listing_id ON public.bookings(listing_id);
CREATE INDEX idx_bookings_customer_id ON public.bookings(customer_id);
CREATE INDEX idx_bookings_host_id ON public.bookings(host_id);
CREATE INDEX idx_bookings_status ON public.bookings(status);
CREATE INDEX idx_bookings_time ON public.bookings(start_time, end_time);

-- Reviews indexes
CREATE INDEX idx_reviews_booking_id ON public.reviews(booking_id);
CREATE INDEX idx_reviews_customer_id ON public.reviews(customer_id);
CREATE INDEX idx_reviews_rating ON public.reviews(rating);

-- Payouts indexes
CREATE INDEX idx_payouts_host_id ON public.payouts(host_id);
CREATE INDEX idx_payouts_status ON public.payouts(status);

-- ============================================
-- 4. CREATE TRIGGERS FOR UPDATED_AT
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply triggers to tables with updated_at columns
CREATE TRIGGER update_host_profiles_updated_at 
    BEFORE UPDATE ON public.host_profiles 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_pricing_updated_at 
    BEFORE UPDATE ON public.pricing 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_listings_updated_at 
    BEFORE UPDATE ON public.listings 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at 
    BEFORE UPDATE ON public.bookings 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 5. ENABLE ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.host_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pricing ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.availability_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payouts ENABLE ROW LEVEL SECURITY;

-- ============================================
-- 6. CREATE RLS POLICIES
-- ============================================

-- Users policies
CREATE POLICY "Users can view their own profile" ON public.users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.users
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.users
    FOR INSERT WITH CHECK (auth.uid() = id);

-- Host profiles policies
CREATE POLICY "Anyone can view host profiles" ON public.host_profiles
    FOR SELECT USING (true);

CREATE POLICY "Users can create their own host profile" ON public.host_profiles
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own host profile" ON public.host_profiles
    FOR UPDATE USING (auth.uid() = user_id);

-- Portfolio items policies
CREATE POLICY "Anyone can view portfolio items" ON public.portfolio_items
    FOR SELECT USING (true);

CREATE POLICY "Hosts can manage their portfolio items" ON public.portfolio_items
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.host_profiles 
            WHERE id = host_id AND user_id = auth.uid()
        )
    );

CREATE POLICY "Hosts can update their portfolio items" ON public.portfolio_items
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM public.host_profiles 
            WHERE id = host_id AND user_id = auth.uid()
        )
    );

CREATE POLICY "Hosts can delete their portfolio items" ON public.portfolio_items
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM public.host_profiles 
            WHERE id = host_id AND user_id = auth.uid()
        )
    );

-- Pricing policies
CREATE POLICY "Anyone can view pricing" ON public.pricing
    FOR SELECT USING (true);

CREATE POLICY "Hosts can manage their pricing" ON public.pricing
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.host_profiles 
            WHERE id = host_id AND user_id = auth.uid()
        )
    );

-- Availability slots policies
CREATE POLICY "Anyone can view availability slots" ON public.availability_slots
    FOR SELECT USING (true);

CREATE POLICY "Hosts can manage their availability" ON public.availability_slots
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.host_profiles 
            WHERE id = host_id AND user_id = auth.uid()
        )
    );

-- Listings policies
CREATE POLICY "Anyone can view active listings" ON public.listings
    FOR SELECT USING (is_active = true);

CREATE POLICY "Hosts can view their own listings" ON public.listings
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.host_profiles 
            WHERE id = host_id AND user_id = auth.uid()
        )
    );

CREATE POLICY "Hosts can manage their listings" ON public.listings
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.host_profiles 
            WHERE id = host_id AND user_id = auth.uid()
        )
    );

-- Bookings policies
CREATE POLICY "Users can view their own bookings" ON public.bookings
    FOR SELECT USING (
        auth.uid() = customer_id OR auth.uid() = host_id
    );

CREATE POLICY "Customers can create bookings" ON public.bookings
    FOR INSERT WITH CHECK (auth.uid() = customer_id);

CREATE POLICY "Hosts and customers can update booking status" ON public.bookings
    FOR UPDATE USING (
        auth.uid() = customer_id OR auth.uid() = host_id
    );

-- Reviews policies
CREATE POLICY "Anyone can view reviews" ON public.reviews
    FOR SELECT USING (true);

CREATE POLICY "Customers can create reviews for their completed bookings" ON public.reviews
    FOR INSERT WITH CHECK (
        auth.uid() = customer_id AND
        EXISTS (
            SELECT 1 FROM public.bookings 
            WHERE id = booking_id 
            AND customer_id = auth.uid() 
            AND status = 'COMPLETED'
        )
    );

CREATE POLICY "Customers can update their own reviews" ON public.reviews
    FOR UPDATE USING (auth.uid() = customer_id);

-- Payouts policies
CREATE POLICY "Hosts can view their own payouts" ON public.payouts
    FOR SELECT USING (auth.uid() = host_id);

CREATE POLICY "Hosts can request payouts" ON public.payouts
    FOR INSERT WITH CHECK (auth.uid() = host_id);

-- ============================================
-- 7. CREATE FUNCTIONS FOR BUSINESS LOGIC
-- ============================================

-- Function to update host rating when a review is added
CREATE OR REPLACE FUNCTION update_host_rating()
RETURNS TRIGGER AS $$
DECLARE
    host_profile_id UUID;
    avg_rating DECIMAL(2,1);
    review_count INTEGER;
BEGIN
    -- Get host profile ID from booking
    SELECT hp.id INTO host_profile_id
    FROM public.bookings b
    JOIN public.host_profiles hp ON hp.user_id = b.host_id
    WHERE b.id = NEW.booking_id;

    -- Calculate new average rating and count
    SELECT 
        ROUND(AVG(r.rating)::numeric, 1),
        COUNT(*)
    INTO avg_rating, review_count
    FROM public.reviews r
    JOIN public.bookings b ON b.id = r.booking_id
    JOIN public.host_profiles hp ON hp.user_id = b.host_id
    WHERE hp.id = host_profile_id;

    -- Update host profile
    UPDATE public.host_profiles
    SET 
        rating_avg = avg_rating,
        rating_count = review_count
    WHERE id = host_profile_id;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update host rating when review is added/updated
CREATE TRIGGER update_host_rating_trigger
    AFTER INSERT OR UPDATE ON public.reviews
    FOR EACH ROW EXECUTE FUNCTION update_host_rating();

-- Function to create user profile after signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.users (id, email, name, role)
    VALUES (
        NEW.id,
        NEW.email,
        NEW.raw_user_meta_data->>'full_name',
        COALESCE(NEW.raw_user_meta_data->>'role', 'CUSTOMER')::user_role
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create user profile when auth user is created
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- 8. CREATE VIEWS FOR COMMON QUERIES
-- ============================================

-- View for service listings with host details
CREATE VIEW public.service_listings AS
SELECT 
    l.id,
    l.title,
    l.description,
    l.base_city,
    l.tags,
    l.is_active,
    l.created_at,
    u.name as host_name,
    u.image as host_image,
    hp.rating_avg,
    hp.rating_count,
    hp.services,
    p.hourly_rate,
    p.daily_rate,
    p.packages
FROM public.listings l
JOIN public.host_profiles hp ON hp.id = l.host_id
JOIN public.users u ON u.id = hp.user_id
LEFT JOIN public.pricing p ON p.host_id = hp.id
WHERE l.is_active = true;

-- View for booking details with all related info
CREATE VIEW public.booking_details AS
SELECT 
    b.id,
    b.start_time,
    b.end_time,
    b.pricing_type,
    b.hours,
    b.subtotal,
    b.fees,
    b.tax,
    b.total,
    b.status,
    b.created_at,
    l.title as listing_title,
    l.description as listing_description,
    customer.name as customer_name,
    customer.email as customer_email,
    host.name as host_name,
    host.email as host_email,
    r.rating,
    r.comment as review_comment
FROM public.bookings b
JOIN public.listings l ON l.id = b.listing_id
JOIN public.users customer ON customer.id = b.customer_id
JOIN public.users host ON host.id = b.host_id
LEFT JOIN public.reviews r ON r.booking_id = b.id;

-- ============================================
-- 9. INSERT SAMPLE DATA (OPTIONAL)
-- ============================================

-- Note: This section is commented out as you'll likely want to add your own data
-- You can uncomment and modify as needed

/*
-- Sample categories for testing
INSERT INTO public.users (id, email, name, role) VALUES
    ('550e8400-e29b-41d4-a716-446655440001', 'john.photographer@example.com', 'John Smith', 'HOST'),
    ('550e8400-e29b-41d4-a716-446655440002', 'sarah.customer@example.com', 'Sarah Johnson', 'CUSTOMER');

-- Sample host profile
INSERT INTO public.host_profiles (user_id, bio, years_experience, services, equipment, city) VALUES
    ('550e8400-e29b-41d4-a716-446655440001', 'Professional wedding photographer with 8+ years experience', 8, 
     ARRAY['PHOTOGRAPHY', 'VIDEOGRAPHY'], 
     ARRAY['Canon EOS R5', 'Sony A7R IV', 'DJI Mavic 3'], 
     'San Francisco');
*/

-- ============================================
-- SETUP COMPLETE
-- ============================================

-- Your Supabase database is now set up!
-- Make sure to:
-- 1. Set your environment variables in your .env file
-- 2. Configure your Supabase project URL and anon key
-- 3. Test the authentication flow
-- 4. Add sample data as needed

