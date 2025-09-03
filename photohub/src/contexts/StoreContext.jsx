import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured, TABLES } from '@/lib/supabaseClient'
import { dummyServices, dummyBookings, dummyReviews, categories, subcategories } from '@/lib/dummyData'

const StoreContext = createContext()

export const useStore = () => {
  const context = useContext(StoreContext)
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return context
}

export const StoreProvider = ({ children }) => {
  const [services, setServices] = useState([])
  const [bookings, setBookings] = useState([])
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [isDummyMode, setIsDummyMode] = useState(!isSupabaseConfigured())

  // Initialize store data
  useEffect(() => {
    if (isDummyMode) {
      // Use dummy data for local testing
      setServices(dummyServices)
      setBookings(dummyBookings)
      setReviews(dummyReviews)
      setLoading(false)
      return
    }

    // Fetch initial data from Supabase
    const fetchInitialData = async () => {
      try {
        const [servicesData, bookingsData, reviewsData] = await Promise.all([
          fetchServices(),
          fetchBookings(),
          fetchReviews(),
        ])

        setServices(servicesData)
        setBookings(bookingsData)
        setReviews(reviewsData)
      } catch (error) {
        console.error('Error fetching initial data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchInitialData()
  }, [isDummyMode])

  const buildAuthHeaders = async () => {
    const { data: { session } = { session: null } } = await supabase.auth.getSession()
    const headers = {
      apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
    }
    if (session?.access_token) {
      headers.Authorization = `Bearer ${session.access_token}`
    }
    return headers
  }

  const buildUrl = (tableName, params = []) => {
    const baseUrl = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/${tableName}`
    const query = ['select=*', ...params].filter(Boolean).join('&')
    return `${baseUrl}?${query}`
  }

  // Fetch services
  const fetchServices = async (filters = {}) => {
    if (isDummyMode) {
      let filteredServices = [...dummyServices]
      
      if (filters.category) {
        filteredServices = filteredServices.filter(s => s.category === filters.category)
      }
      if (filters.subcategory) {
        filteredServices = filteredServices.filter(s => s.subcategory === filters.subcategory)
      }
      if (filters.location) {
        filteredServices = filteredServices.filter(s => 
          s.location.toLowerCase().includes(filters.location.toLowerCase())
        )
      }
      if (filters.maxPrice) {
        filteredServices = filteredServices.filter(s => s.hourly_rate <= filters.maxPrice)
      }
      
      return filteredServices
    }

    try {
      const params = []
      if (filters.category) params.push(`category=eq.${encodeURIComponent(filters.category)}`)
      if (filters.subcategory) params.push(`subcategory=eq.${encodeURIComponent(filters.subcategory)}`)
      if (filters.location) params.push(`location=ilike.${encodeURIComponent('%' + filters.location + '%')}`)
      if (filters.maxPrice) params.push(`hourly_rate=lte.${encodeURIComponent(filters.maxPrice)}`)

      const url = buildUrl(TABLES.SERVICES, params)
      const headers = await buildAuthHeaders()
      const res = await fetch(url, { headers })
      if (!res.ok) throw new Error(`Failed to fetch services: ${res.status}`)
      const data = await res.json()
      return Array.isArray(data) ? data : []
    } catch (error) {
      console.error('Error fetching services:', error)
      return []
    }
  }

  // Fetch bookings
  const fetchBookings = async (userId = null) => {
    if (isDummyMode) {
      return userId 
        ? dummyBookings.filter(b => b.customer_id === userId || b.host_id === userId)
        : dummyBookings
    }

    try {
      const params = []
      if (userId) params.push(`or=(customer_id.eq.${encodeURIComponent(userId)},host_id.eq.${encodeURIComponent(userId)})`)
      const url = buildUrl(TABLES.BOOKINGS, params)
      const headers = await buildAuthHeaders()
      const res = await fetch(url, { headers })
      if (!res.ok) throw new Error(`Failed to fetch bookings: ${res.status}`)
      const data = await res.json()
      return Array.isArray(data) ? data : []
    } catch (error) {
      console.error('Error fetching bookings:', error)
      return []
    }
  }

  // Fetch reviews
  const fetchReviews = async (serviceId = null) => {
    if (isDummyMode) {
      return serviceId 
        ? dummyReviews.filter(r => r.service_id === serviceId)
        : dummyReviews
    }

    try {
      const params = []
      if (serviceId) params.push(`service_id=eq.${encodeURIComponent(serviceId)}`)
      const url = buildUrl(TABLES.REVIEWS, params)
      const headers = await buildAuthHeaders()
      const res = await fetch(url, { headers })
      if (!res.ok) throw new Error(`Failed to fetch reviews: ${res.status}`)
      const data = await res.json()
      return Array.isArray(data) ? data : []
    } catch (error) {
      console.error('Error fetching reviews:', error)
      return []
    }
  }

  // Create service
  const createService = async (serviceData) => {
    if (isDummyMode) {
      const newService = {
        id: Date.now().toString(),
        ...serviceData,
        created_at: new Date().toISOString(),
        rating: 0,
        review_count: 0,
        is_available: true,
      }
      setServices(prev => [...prev, newService])
      return { data: newService, error: null }
    }

    try {
      const { data, error } = await supabase
        .from(TABLES.SERVICES)
        .insert([serviceData])
        .select()
        .single()

      if (error) throw error
      setServices(prev => [...prev, data])
      return { data, error: null }
    } catch (error) {
      return { data: null, error: error.message }
    }
  }

  // Update service
  const updateService = async (serviceId, updates) => {
    if (isDummyMode) {
      setServices(prev => 
        prev.map(s => s.id === serviceId ? { ...s, ...updates } : s)
      )
      return { data: { id: serviceId, ...updates }, error: null }
    }

    try {
      const { data, error } = await supabase
        .from(TABLES.SERVICES)
        .update(updates)
        .eq('id', serviceId)
        .select()
        .single()

      if (error) throw error
      setServices(prev => 
        prev.map(s => s.id === serviceId ? data : s)
      )
      return { data, error: null }
    } catch (error) {
      return { data: null, error: error.message }
    }
  }

  // Create booking
  const createBooking = async (bookingData) => {
    if (isDummyMode) {
      const newBooking = {
        id: Date.now().toString(),
        ...bookingData,
        created_at: new Date().toISOString(),
        status: 'pending',
      }
      setBookings(prev => [...prev, newBooking])
      return { data: newBooking, error: null }
    }

    try {
      const { data, error } = await supabase
        .from(TABLES.BOOKINGS)
        .insert([bookingData])
        .select()
        .single()

      if (error) throw error
      setBookings(prev => [...prev, data])
      return { data, error: null }
    } catch (error) {
      return { data: null, error: error.message }
    }
  }

  // Update booking status
  const updateBookingStatus = async (bookingId, status) => {
    if (isDummyMode) {
      setBookings(prev => 
        prev.map(b => b.id === bookingId ? { ...b, status } : b)
      )
      return { data: { id: bookingId, status }, error: null }
    }

    try {
      const { data, error } = await supabase
        .from(TABLES.BOOKINGS)
        .update({ status })
        .eq('id', bookingId)
        .select()
        .single()

      if (error) throw error
      setBookings(prev => 
        prev.map(b => b.id === bookingId ? data : b)
      )
      return { data, error: null }
    } catch (error) {
      return { data: null, error: error.message }
    }
  }

  // Create review
  const createReview = async (reviewData) => {
    if (isDummyMode) {
      const newReview = {
        id: Date.now().toString(),
        ...reviewData,
        created_at: new Date().toISOString(),
      }
      setReviews(prev => [...prev, newReview])
      
      // Update service rating
      const serviceReviews = reviews.filter(r => r.service_id === reviewData.service_id)
      const newServiceReviews = [...serviceReviews, newReview]
      const avgRating = newServiceReviews.reduce((sum, r) => sum + r.rating, 0) / newServiceReviews.length
      
      setServices(prev => 
        prev.map(s => s.id === reviewData.service_id 
          ? { ...s, rating: avgRating, review_count: newServiceReviews.length }
          : s
        )
      )
      
      return { data: newReview, error: null }
    }

    try {
      const { data, error } = await supabase
        .from(TABLES.REVIEWS)
        .insert([reviewData])
        .select()
        .single()

      if (error) throw error
      setReviews(prev => [...prev, data])
      return { data, error: null }
    } catch (error) {
      return { data: null, error: error.message }
    }
  }

  const value = {
    services,
    bookings,
    reviews,
    categories,
    subcategories,
    loading,
    isDummyMode,
    fetchServices,
    fetchBookings,
    fetchReviews,
    createService,
    updateService,
    createBooking,
    updateBookingStatus,
    createReview,
  }

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}


