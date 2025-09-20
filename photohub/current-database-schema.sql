-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.bookings (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  service_id uuid NOT NULL,
  user_id uuid NOT NULL,
  host_id uuid NOT NULL,
  start_date date NOT NULL,
  start_time time without time zone NOT NULL,
  end_time time without time zone NOT NULL,
  duration_hours integer,
  total_amount numeric NOT NULL,
  status text DEFAULT 'CONFIRMED'::text CHECK (status = ANY (ARRAY['CONFIRMED'::text, 'ACTIVE'::text, 'COMPLETED'::text, 'CANCELLED'::text])),
  payment_status text DEFAULT 'PENDING'::text CHECK (payment_status = ANY (ARRAY['PENDING'::text, 'PAID'::text, 'FAILED'::text, 'REFUNDED'::text])),
  special_requirements text,
  location text,
  contact_phone text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  service_type text,
  customer_name text,
  customer_location text,
  service_duration integer,
  CONSTRAINT bookings_pkey PRIMARY KEY (id),
  CONSTRAINT bookings_service_id_fkey FOREIGN KEY (service_id) REFERENCES public.services(id),
  CONSTRAINT bookings_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.user_profiles(id),
  CONSTRAINT bookings_host_id_fkey FOREIGN KEY (host_id) REFERENCES public.host_profiles(id)
);

CREATE TABLE public.host_profiles (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL UNIQUE,
  email text NOT NULL UNIQUE,
  full_name text,
  avatar_url text,
  business_name text,
  business_description text,
  years_experience integer,
  equipment_list ARRAY,
  portfolio_url text,
  social_media jsonb,
  is_verified boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT host_profiles_pkey PRIMARY KEY (id),
  CONSTRAINT host_profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
);

CREATE TABLE public.reviews (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  booking_id uuid NOT NULL,
  service_id uuid NOT NULL,
  user_id uuid NOT NULL,
  host_id uuid NOT NULL,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  comment text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT reviews_pkey PRIMARY KEY (id),
  CONSTRAINT reviews_booking_id_fkey FOREIGN KEY (booking_id) REFERENCES public.bookings(id),
  CONSTRAINT reviews_service_id_fkey FOREIGN KEY (service_id) REFERENCES public.services(id),
  CONSTRAINT reviews_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.user_profiles(id),
  CONSTRAINT reviews_host_id_fkey FOREIGN KEY (host_id) REFERENCES public.host_profiles(id)
);

CREATE TABLE public.services (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  host_id uuid NOT NULL,
  title text NOT NULL,
  description text,
  category text,
  subcategory text,
  pricing_type text CHECK (pricing_type = ANY (ARRAY['HOURLY'::text, 'DAILY'::text, 'FIXED'::text])),
  hourly_rate numeric,
  daily_rate numeric,
  fixed_rate numeric,
  coverage_area ARRAY,
  images ARRAY,
  videos ARRAY,
  tags ARRAY,
  is_available boolean DEFAULT true,
  rating numeric DEFAULT 0,
  review_count integer DEFAULT 0,
  booking_count integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  state text,
  city text,
  CONSTRAINT services_pkey PRIMARY KEY (id),
  CONSTRAINT services_host_id_fkey FOREIGN KEY (host_id) REFERENCES public.host_profiles(id)
);

CREATE TABLE public.user_profiles (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL UNIQUE,
  email text NOT NULL UNIQUE,
  full_name text,
  avatar_url text,
  phone text,
  location text,
  is_verified boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT user_profiles_pkey PRIMARY KEY (id),
  CONSTRAINT user_profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
);



