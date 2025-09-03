// Dummy data for local testing when Supabase is not connected

export const dummyProfiles = [
  {
    id: '1',
    email: 'john@example.com',
    full_name: 'John Smith',
    role: 'host',
    avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    bio: 'Professional photographer with 8+ years of experience specializing in weddings and corporate events.',
    location: 'San Francisco, CA',
    rating: 4.8,
    review_count: 127,
    created_at: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    email: 'sarah@example.com',
    full_name: 'Sarah Johnson',
    role: 'customer',
    avatar_url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    bio: 'Event planner looking for reliable photography services.',
    location: 'Los Angeles, CA',
    rating: null,
    review_count: 0,
    created_at: '2024-01-20T14:30:00Z',
  },
  {
    id: '3',
    email: 'mike@example.com',
    full_name: 'Mike Chen',
    role: 'host',
    avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    bio: 'FAA certified drone pilot with professional equipment for stunning aerial footage.',
    location: 'Miami, FL',
    rating: 4.9,
    review_count: 89,
    created_at: '2024-01-10T09:15:00Z',
  },
]

export const dummyServices = [
  {
    id: '1',
    host_id: '1',
    title: 'Professional Wedding Photography',
    description: 'Complete wedding photography coverage including engagement sessions, ceremony, reception, and edited photos.',
    category: 'photography',
    subcategory: 'wedding',
    hourly_rate: 150,
    daily_rate: 1200,
    location: 'San Francisco, CA',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=400',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400',
    ],
    tags: ['wedding', 'portrait', 'events'],
    rating: 4.8,
    review_count: 45,
    is_available: true,
    created_at: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    host_id: '3',
    title: 'Aerial Drone Photography & Videography',
    description: 'FAA certified drone pilot providing stunning aerial footage for real estate, events, and commercial projects.',
    category: 'drone',
    subcategory: 'aerial',
    hourly_rate: 200,
    daily_rate: 1500,
    location: 'Miami, FL',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      'https://images.unsplash.com/photo-1506947411487-a56738267384?w=400',
    ],
    tags: ['drone', 'aerial', 'real-estate'],
    rating: 4.9,
    review_count: 32,
    is_available: true,
    created_at: '2024-01-10T09:15:00Z',
  },
  {
    id: '3',
    host_id: '1',
    title: 'Corporate Event Photography',
    description: 'Professional photography for corporate events, conferences, and business functions.',
    category: 'photography',
    subcategory: 'corporate',
    hourly_rate: 120,
    daily_rate: 900,
    location: 'San Francisco, CA',
    images: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400',
    ],
    tags: ['corporate', 'events', 'business'],
    rating: 4.7,
    review_count: 28,
    is_available: true,
    created_at: '2024-01-18T11:30:00Z',
  },
]

export const dummyBookings = [
  {
    id: '1',
    customer_id: '2',
    service_id: '1',
    host_id: '1',
    start_date: '2024-02-15T10:00:00Z',
    end_date: '2024-02-15T18:00:00Z',
    duration_hours: 8,
    total_amount: 1200,
    status: 'confirmed',
    special_requests: 'Please focus on candid moments during the ceremony.',
    created_at: '2024-01-25T15:30:00Z',
  },
  {
    id: '2',
    customer_id: '2',
    service_id: '2',
    host_id: '3',
    start_date: '2024-02-20T09:00:00Z',
    end_date: '2024-02-20T17:00:00Z',
    duration_hours: 8,
    total_amount: 1500,
    status: 'pending',
    special_requests: 'Need aerial shots of the entire property.',
    created_at: '2024-01-28T10:15:00Z',
  },
]

export const dummyReviews = [
  {
    id: '1',
    booking_id: '1',
    customer_id: '2',
    host_id: '1',
    service_id: '1',
    rating: 5,
    comment: 'Amazing experience! John captured our wedding perfectly. Highly recommend!',
    created_at: '2024-02-16T14:00:00Z',
  },
  {
    id: '2',
    booking_id: '2',
    customer_id: '2',
    host_id: '3',
    service_id: '2',
    rating: 4,
    comment: 'Great aerial footage, very professional service.',
    created_at: '2024-02-21T16:30:00Z',
  },
]

// Categories for filtering
export const categories = [
  { id: 'photography', name: 'Photography', icon: '📸' },
  { id: 'drone', name: 'Drone Services', icon: '🚁' },
  { id: 'videography', name: 'Videography', icon: '🎥' },
  { id: 'studio', name: 'Studio Rental', icon: '🏢' },
]

// Subcategories
export const subcategories = {
  photography: [
    { id: 'wedding', name: 'Wedding Photography' },
    { id: 'portrait', name: 'Portrait Photography' },
    { id: 'corporate', name: 'Corporate Events' },
    { id: 'product', name: 'Product Photography' },
    { id: 'real-estate', name: 'Real Estate' },
  ],
  drone: [
    { id: 'aerial', name: 'Aerial Photography' },
    { id: 'mapping', name: 'Mapping & Surveying' },
    { id: 'inspection', name: 'Inspections' },
  ],
  videography: [
    { id: 'wedding', name: 'Wedding Videography' },
    { id: 'corporate', name: 'Corporate Videos' },
    { id: 'commercial', name: 'Commercial Videos' },
  ],
  studio: [
    { id: 'portrait', name: 'Portrait Studio' },
    { id: 'product', name: 'Product Studio' },
    { id: 'event', name: 'Event Space' },
  ],
}


