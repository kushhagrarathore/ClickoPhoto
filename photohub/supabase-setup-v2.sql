-- PhotoHub Supabase Setup (v2) - Profiles + Providers/Customers + Services schema
-- Run this in Supabase SQL Editor

-- ============================================
-- 0. PREREQUISITES
-- ============================================
-- Extensions (uuid/gen_random_uuid)
create extension if not exists pgcrypto;

-- ============================================
-- 1. ENUMS
-- ============================================
do $$ begin
  create type user_role as enum ('customer','host','admin');
exception when duplicate_object then null; end $$;

do $$ begin
  create type booking_status as enum ('pending','confirmed','declined','cancelled','completed');
exception when duplicate_object then null; end $$;

-- ============================================
-- 2. CORE TABLES (match frontend: profiles, services, bookings, reviews)
-- ============================================

-- Profiles (1 row per auth user)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text,
  role user_role not null default 'customer',
  avatar_url text,
  bio text,
  location text,
  rating numeric(2,1),
  review_count integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Providers (extra fields for hosts)
create table if not exists public.providers (
  id uuid primary key references public.profiles(id) on delete cascade,
  years_experience integer,
  services text[],          -- e.g. ['photography','drone']
  equipment text[],
  city text,
  payout_details jsonb,     -- optional stripe/bank details
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Customers (optional extra fields)
create table if not exists public.customers (
  id uuid primary key references public.profiles(id) on delete cascade,
  preferences jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Services (what the UI queries via TABLES.SERVICES)
create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  host_id uuid not null references public.profiles(id) on delete cascade, -- provider user id
  title text not null,
  description text,
  category text,            -- e.g. 'photography' | 'drone' | 'videography' | 'studio'
  subcategory text,         -- free text (matches UI filters)
  hourly_rate numeric(10,2),
  daily_rate numeric(10,2),
  location text,
  images text[],            -- array of image URLs
  tags text[],
  rating numeric(2,1) default 0,
  review_count integer default 0,
  is_available boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Bookings (match dummyData keys)
create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  service_id uuid not null references public.services(id) on delete cascade,
  customer_id uuid not null references public.profiles(id) on delete cascade,
  host_id uuid not null references public.profiles(id) on delete cascade,
  start_date timestamptz not null,
  end_date timestamptz not null,
  duration_hours integer,
  total_amount numeric(10,2) not null,
  status booking_status not null default 'pending',
  special_requests text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Reviews (match dummyData keys)
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid unique not null references public.bookings(id) on delete cascade,
  customer_id uuid not null references public.profiles(id) on delete cascade,
  host_id uuid not null references public.profiles(id) on delete cascade,
  service_id uuid not null references public.services(id) on delete cascade,
  rating integer not null check (rating between 1 and 5),
  comment text,
  created_at timestamptz default now()
);

-- ============================================
-- 3. INDEXES
-- ============================================
create index if not exists idx_profiles_role on public.profiles(role);
create index if not exists idx_services_host on public.services(host_id);
create index if not exists idx_services_category on public.services(category);
create index if not exists idx_services_location on public.services(location);
create index if not exists idx_bookings_parties on public.bookings(customer_id, host_id);
create index if not exists idx_bookings_service on public.bookings(service_id);
create index if not exists idx_reviews_service on public.reviews(service_id);

-- ============================================
-- 4. TRIGGERS (updated_at)
-- ============================================
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;$$ language plpgsql;

do $$ begin
  create trigger trg_profiles_updated
    before update on public.profiles
    for each row execute function public.set_updated_at();
exception when duplicate_object then null; end $$;

do $$ begin
  create trigger trg_providers_updated
    before update on public.providers
    for each row execute function public.set_updated_at();
exception when duplicate_object then null; end $$;

do $$ begin
  create trigger trg_customers_updated
    before update on public.customers
    for each row execute function public.set_updated_at();
exception when duplicate_object then null; end $$;

do $$ begin
  create trigger trg_services_updated
    before update on public.services
    for each row execute function public.set_updated_at();
exception when duplicate_object then null; end $$;

do $$ begin
  create trigger trg_bookings_updated
    before update on public.bookings
    for each row execute function public.set_updated_at();
exception when duplicate_object then null; end $$;

-- ============================================
-- 5. RLS
-- ============================================
alter table public.profiles enable row level security;
alter table public.providers enable row level security;
alter table public.customers enable row level security;
alter table public.services enable row level security;
alter table public.bookings enable row level security;
alter table public.reviews enable row level security;

-- profiles
do $$ begin
  create policy "profiles_select_own" on public.profiles for select using (auth.uid() = id);
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "profiles_update_own" on public.profiles for update using (auth.uid() = id);
exception when duplicate_object then null; end $$;

-- providers
do $$ begin
  create policy "providers_select_all" on public.providers for select using (true);
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "providers_upsert_own" on public.providers for all using (auth.uid() = id) with check (auth.uid() = id);
exception when duplicate_object then null; end $$;

-- customers
do $$ begin
  create policy "customers_select_own" on public.customers for select using (auth.uid() = id);
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "customers_upsert_own" on public.customers for all using (auth.uid() = id) with check (auth.uid() = id);
exception when duplicate_object then null; end $$;

-- services
do $$ begin
  create policy "services_select_all" on public.services for select using (true);
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "services_insert_host" on public.services for insert with check (auth.uid() = host_id);
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "services_update_host" on public.services for update using (auth.uid() = host_id);
exception when duplicate_object then null; end $$;

-- bookings
do $$ begin
  create policy "bookings_select_own" on public.bookings for select using (auth.uid() = customer_id or auth.uid() = host_id);
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "bookings_insert_customer" on public.bookings for insert with check (auth.uid() = customer_id);
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "bookings_update_parties" on public.bookings for update using (auth.uid() = customer_id or auth.uid() = host_id);
exception when duplicate_object then null; end $$;

-- reviews
do $$ begin
  create policy "reviews_select_all" on public.reviews for select using (true);
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "reviews_insert_customer_completed" on public.reviews
    for insert with check (
      auth.uid() = customer_id and exists (
        select 1 from public.bookings b
        where b.id = booking_id
          and b.customer_id = auth.uid()
          and b.status = 'completed'
      )
    );
exception when duplicate_object then null; end $$;

-- ============================================
-- 6. BUSINESS LOGIC
-- ============================================

-- Create profile on auth signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name',''),
    coalesce((new.raw_user_meta_data->>'role')::user_role, 'customer')
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

do $$ begin
  create trigger on_auth_user_created
    after insert on auth.users
    for each row execute function public.handle_new_user();
exception when duplicate_object then null; end $$;

-- Update provider rating when a review is added/updated
create or replace function public.update_service_host_rating()
returns trigger as $$
declare
  v_host uuid;
  v_avg numeric(2,1);
  v_count int;
begin
  select s.host_id into v_host from public.bookings b
    join public.services s on s.id = b.service_id
   where b.id = new.booking_id;

  select round(avg(r.rating)::numeric, 1), count(*) into v_avg, v_count
    from public.reviews r
    join public.bookings b on b.id = r.booking_id
    join public.services s on s.id = b.service_id
   where s.host_id = v_host;

  update public.profiles
     set rating = v_avg, review_count = v_count
   where id = v_host;

  update public.services
     set rating = v_avg, review_count = v_count
   where host_id = v_host;

  return new;
end;$$ language plpgsql;

do $$ begin
  create trigger trg_review_upsert
    after insert or update on public.reviews
    for each row execute function public.update_service_host_rating();
exception when duplicate_object then null; end $$;

-- ============================================
-- 7. OPTIONAL VIEWS
-- ============================================
create or replace view public.service_cards as
select s.*, 
       p.full_name as host_name, 
       p.role as host_role
  from public.services s
  join public.profiles p on p.id = s.host_id
 where s.is_available = true;

-- ============================================
-- DONE
-- ============================================




-- ============================================
-- 8. PRODUCTION OTP BACKEND (start/end service)
-- ============================================

-- Booking OTPs table
create table if not exists public.booking_otps (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references public.bookings(id) on delete cascade,
  phase text not null check (phase in ('start','end')),
  code_hash text not null,
  expires_at timestamptz not null,
  consumed_at timestamptz,
  created_at timestamptz default now()
);

create index if not exists idx_booking_otps_booking on public.booking_otps(booking_id);
create index if not exists idx_booking_otps_phase on public.booking_otps(phase);
create index if not exists idx_booking_otps_expiry on public.booking_otps(expires_at);

alter table public.booking_otps enable row level security;

-- Policies: parties can see their own booking otps (minimal exposure)
do $$ begin
  create policy booking_otps_select_parties on public.booking_otps
    for select using (
      exists (
        select 1 from public.bookings b
        join public.user_profiles up on up.id = b.user_id
        where b.id = booking_id and up.user_id = auth.uid()
      )
      or exists (
        select 1 from public.bookings b
        join public.host_profiles hp on hp.id = b.host_id
        where b.id = booking_id and hp.user_id = auth.uid()
      )
    );
exception when duplicate_object then null; end $$;

-- Insert policy: customer can generate start OTP for their own booking
do $$ begin
  create policy booking_otps_insert_customer on public.booking_otps
    for insert with check (
      phase = 'start' and exists (
        select 1 from public.bookings b
        join public.user_profiles up on up.id = b.user_id
        where b.id = booking_id and up.user_id = auth.uid()
      )
    );
exception when duplicate_object then null; end $$;

-- RPC: generate_otp(booking_id, phase)
create or replace function public.generate_otp(p_booking_id uuid, p_phase text default 'start')
returns table(code text, expires_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_code text;
  v_expires timestamptz := now() + interval '10 minutes';
  v_is_customer boolean;
  v_is_host boolean;
begin
  if p_phase not in ('start','end') then
    raise exception 'Invalid phase';
  end if;

  -- permission check: start → customer; end → host (optional usage)
  select exists (
    select 1 from public.bookings b
    join public.user_profiles up on up.id = b.user_id
    where b.id = p_booking_id and up.user_id = auth.uid()
  ) into v_is_customer;

  select exists (
    select 1 from public.bookings b
    join public.host_profiles hp on hp.id = b.host_id
    where b.id = p_booking_id and hp.user_id = auth.uid()
  ) into v_is_host;

  if p_phase = 'start' and not v_is_customer then
    raise exception 'Not allowed to generate start OTP';
  end if;
  if p_phase = 'end' and not v_is_host then
    raise exception 'Not allowed to generate end OTP';
  end if;

  v_code := lpad(floor(random()*900000 + 100000)::int::text, 6, '0');

  insert into public.booking_otps(booking_id, phase, code_hash, expires_at)
  values (p_booking_id, p_phase, encode(digest(v_code, 'sha256'),'hex'), v_expires);

  return query select v_code, v_expires;
end;
$$;

-- RPC: verify_otp(booking_id, phase, code)
create or replace function public.verify_otp(p_booking_id uuid, p_phase text, p_code text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_hash text := encode(digest(p_code, 'sha256'),'hex');
  v_id uuid;
  v_is_customer boolean;
  v_is_host boolean;
begin
  if p_phase not in ('start','end') then
    return false;
  end if;

  -- permissions: start verified by host, end by customer
  select exists (
    select 1 from public.bookings b
    join public.host_profiles hp on hp.id = b.host_id
    where b.id = p_booking_id and hp.user_id = auth.uid()
  ) into v_is_host;

  select exists (
    select 1 from public.bookings b
    join public.user_profiles up on up.id = b.user_id
    where b.id = p_booking_id and up.user_id = auth.uid()
  ) into v_is_customer;

  if p_phase = 'start' and not v_is_host then return false; end if;
  if p_phase = 'end' and not v_is_customer then return false; end if;

  select id into v_id from public.booking_otps
   where booking_id = p_booking_id and phase = p_phase
     and consumed_at is null and expires_at > now()
   order by created_at desc limit 1;

  if v_id is null then return false; end if;

  if not exists (
    select 1 from public.booking_otps where id = v_id and code_hash = v_hash
  ) then return false; end if;

  update public.booking_otps set consumed_at = now() where id = v_id;

  update public.bookings
     set status = case when p_phase = 'start' then 'ACTIVE' else 'COMPLETED' end
   where id = p_booking_id;

  return true;
end;
$$;
