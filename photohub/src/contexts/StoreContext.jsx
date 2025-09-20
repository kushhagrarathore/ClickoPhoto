import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured, TABLES } from '../lib/supabaseClient'
import { dummyServices, dummyBookings, dummyReviews, categories, subcategories } from '../lib/dummyData'
import { cleanupServiceImages, parseServiceImages } from '../utils/imageUtils'
import { useAuth } from './AuthContext'

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
  const { user } = useAuth()

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

    // For Supabase mode, fetch data immediately
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
  }, [isDummyMode, user])


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
      if (filters.city) {
        filteredServices = filteredServices.filter(s =>
          s.city?.toLowerCase().includes(filters.city.toLowerCase())
        )
      }
      if (filters.state) {
        filteredServices = filteredServices.filter(s =>
          s.state?.toLowerCase().includes(filters.state.toLowerCase())
        )
      }
      if (filters.maxPrice) {
        filteredServices = filteredServices.filter(s => s.hourly_rate <= filters.maxPrice)
      }
  
      return filteredServices
    }
  
    try {
      let query = supabase.from(TABLES.SERVICES).select('*').eq('is_available', true)
      if (filters.category) query = query.eq('category', filters.category)
      if (filters.subcategory) query = query.eq('subcategory', filters.subcategory)
      if (filters.city) query = query.ilike('city', `%${filters.city}%`)
      if (filters.state) query = query.ilike('state', `%${filters.state}%`)
      if (filters.maxPrice) query = query.lte('hourly_rate', filters.maxPrice)
  
      const { data, error } = await query
      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching services:', error)
      return []
    }
  }
  

  // Fetch bookings
  const fetchBookings = async (userId = null) => {
    if (isDummyMode) {
      return userId 
        ? dummyBookings.filter(b => b.user_id === userId || b.host_id === userId)
        : dummyBookings
    }

    try {
      let query = supabase.from(TABLES.BOOKINGS).select('*')
      if (userId) query = query.or(`user_id.eq.${userId},host_id.eq.${userId}`)
      const { data, error } = await query
      if (error) throw error
      
      return data || []
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
      let query = supabase.from(TABLES.REVIEWS).select('*')
      if (serviceId) query = query.eq('service_id', serviceId)
      const { data, error } = await query
      if (error) throw error
      return data || []
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
      console.log('📤 Creating service with data:', serviceData)
      // Insert without selecting representation to avoid SELECT RLS requirements
      const { error } = await supabase
        .from(TABLES.SERVICES)
        .insert([serviceData])

      if (error) {
        console.error('❌ Supabase insert error:', error.message)
        return { data: null, error: error.message }
      }

      // Refresh services list to include the newly created row
      const refreshed = await fetchServices()
      setServices(refreshed)
      console.log('✅ Service created and list refreshed')
      return { data: null, error: null }
    } catch (error) {
      console.error('🔥 Unexpected createService error:', error)
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

  // Delete service
  const deleteService = async (serviceId) => {
    if (isDummyMode) {
      setServices(prev => prev.filter(s => s.id !== serviceId))
      return { error: null }
    }

    try {
      const serviceToDelete = services.find(s => s.id === serviceId)
      if (serviceToDelete?.images) {
        const imgs = parseServiceImages(serviceToDelete.images)
        await cleanupServiceImages(imgs)
      }
      const { error } = await supabase
        .from(TABLES.SERVICES)
        .delete()
        .eq('id', serviceId)

      if (error) throw error
      setServices(prev => prev.filter(s => s.id !== serviceId))
      return { error: null }
    } catch (error) {
      return { error: error.message }
    }
  }

  // Create booking
  const createBooking = async (bookingData) => {
    if (isDummyMode) {
      const newBooking = {
        id: Date.now().toString(),
        ...bookingData,
        created_at: new Date().toISOString(),
        status: 'PENDING',
      }
      setBookings(prev => [...prev, newBooking])
      return { data: newBooking, error: null }
    }

    try {
      console.log('📤 Creating booking with data:', bookingData)
      
      // Ensure user is authenticated
      const { data: { user }, error: authError } = await supabase.auth.getUser()
      
      if (authError || !user) {
        console.error('❌ Authentication error:', authError)
        throw new Error('User not authenticated')
      }

      console.log('✅ User authenticated:', user.id)

      // Ensure user profile exists
      let userProfileId = null
      try {
        const { data: existingProfile, error: profileError } = await supabase
          .from('user_profiles')
          .select('id')
          .eq('user_id', user.id)
          .maybeSingle()

        if (profileError) {
          console.warn('Profile lookup error:', profileError)
        }

        if (existingProfile?.id) {
          userProfileId = existingProfile.id
          console.log('✅ Found existing profile:', userProfileId)
        } else {
          // Create user profile if it doesn't exist
          const { data: newProfile, error: insertProfileErr } = await supabase
            .from('user_profiles')
            .insert([{
              user_id: user.id,
              email: user.email || bookingData.customer_email || '',
              full_name: bookingData.customer_name || user.user_metadata?.full_name || '',
              phone: bookingData.contact_phone || '',
              location: bookingData.customer_location || '',
            }])
            .select('id')
            .single()
          
          if (insertProfileErr) {
            console.error('❌ Profile creation error:', insertProfileErr)
            throw insertProfileErr
          }
          
          userProfileId = newProfile?.id || null
          console.log('✅ Created new profile:', userProfileId)
        }
      } catch (profileErr) {
        console.error('❌ Profile handling failed:', profileErr)
        throw new Error(`Profile setup failed: ${profileErr.message}`)
      }

      // Clean the booking data to match database schema and RLS policies
      const cleanBookingData = {
        service_id: bookingData.serviceId,
        user_id: userProfileId, // Use user profile ID to match foreign key constraint
        host_id: bookingData.hostId, // Use host profile ID to match foreign key constraint
        start_date: bookingData.startDateStr || bookingData.startDate,
        start_time: bookingData.startTimeStr || bookingData.startTime,
        end_time: bookingData.endTimeStr || bookingData.endTime,
        duration_hours: bookingData.durationType === 'hours' ? bookingData.duration : bookingData.duration * 24,
        total_amount: bookingData.totalAmount,
        status: 'CONFIRMED',
        payment_status: 'PENDING',
        special_requirements: bookingData.specialRequests || bookingData.special_requirements || null,
        service_type: bookingData.service_type || null,
        customer_name: bookingData.customer_name || null,
        customer_location: bookingData.customer_location || null,
        location: bookingData.location || null,
        contact_phone: bookingData.contact_phone || null,
        otp: bookingData.otp || null,
      }

      // Remove any unexpected fields that might cause issues
      const allowedFields = [
        'service_id', 'user_id', 'host_id', 'start_date', 'start_time', 'end_time',
        'duration_hours', 'total_amount', 'status', 'payment_status', 'special_requirements',
        'service_type', 'customer_name', 'customer_location', 'location', 'contact_phone', 'otp'
      ]
      
      const finalBookingData = {}
      allowedFields.forEach(field => {
        if (cleanBookingData[field] !== undefined) {
          finalBookingData[field] = cleanBookingData[field]
        }
      })

      // Insert booking
      const { data, error } = await supabase
        .from(TABLES.BOOKINGS)
        .insert([finalBookingData])
        .select()

      if (error) {
        console.error('❌ Supabase insert error:', error)
        throw error
      }

      console.log('✅ Booking created successfully:', data)

      // Update local state
      setBookings(prev => [...prev, ...data])

      // Mark service as unavailable
      try {
        setServices(prev => prev.map(s => 
          s.id === finalBookingData.service_id 
            ? { ...s, is_available: false } 
            : s
        ))
        
        await supabase
          .from(TABLES.SERVICES)
          .update({ is_available: false })
          .eq('id', finalBookingData.service_id)
      } catch (serviceError) {
        console.warn('Service availability update failed:', serviceError)
      }

      return { data, error: null }
    } catch (error) {
      console.error('❌ createBooking error:', error)
      return { data: null, error: error.message || error }
    }
  }

  // Update booking status
  const updateBookingStatus = async (bookingId, status) => {
    if (isDummyMode) {
      setBookings(prev => 
        prev.map(b => b.id === bookingId ? { ...b, status } : b)
      )
      // Toggle service availability if completed
      if (status === 'COMPLETED') {
        const booking = bookings.find(b => b.id === bookingId)
        if (booking?.service_id) {
          setServices(prev => prev.map(s => s.id === booking.service_id ? { ...s, is_available: true } : s))
        }
      }
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
      // If status change affects availability, persist
      try {
        if (status === 'COMPLETED') {
          await supabase
            .from(TABLES.SERVICES)
            .update({ is_available: true })
            .eq('id', data.service_id)
          setServices(prev => prev.map(s => s.id === data.service_id ? { ...s, is_available: true } : s))
        } else if (status === 'CONFIRMED') {
          await supabase
            .from(TABLES.SERVICES)
            .update({ is_available: false })
            .eq('id', data.service_id)
          setServices(prev => prev.map(s => s.id === data.service_id ? { ...s, is_available: false } : s))
        }
      } catch {}
      return { data, error: null }
    } catch (error) {
      return { data: null, error: error.message }
    }
  }


  // Early end by customer, with warning handled in UI; completes immediately
  const endServiceNow = async (bookingId) => {
    return await updateBookingStatus(bookingId, 'COMPLETED')
  }

  // Auto-end scheduler (client-side best-effort; backend cron recommended for production)
  useEffect(() => {
    if (isDummyMode) return
    const timers = []
    bookings.forEach((b) => {
      if (String(b.status).toUpperCase() === 'CONFIRMED' && b.end_time) {
        const endAt = new Date(`${b.start_date}T${b.end_time}`)
        const delay = endAt.getTime() - Date.now()
        if (delay > 0 && delay < 24 * 60 * 60 * 1000) {
          const t = setTimeout(() => {
            updateBookingStatus(b.id, 'COMPLETED')
          }, delay)
          timers.push(t)
        }
      }
    })
    return () => timers.forEach(clearTimeout)
  }, [bookings, isDummyMode])

  // Extend service: add minutes to end_time and adjust total_amount
  const extendService = async (bookingId, extraMinutes, extraCostPerMinute) => {
    if (isDummyMode) {
      setBookings(prev => prev.map(b => b.id === bookingId ? {
        ...b,
        end_time: new Date(new Date(`${b.start_date}T${b.end_time}`).getTime() + extraMinutes * 60000).toTimeString().slice(0,8),
        total_amount: (b.total_amount || 0) + extraMinutes * extraCostPerMinute,
      } : b))
      return { data: { id: bookingId }, error: null }
    }
    try {
      const target = bookings.find(b => b.id === bookingId)
      if (!target) return { data: null, error: 'Booking not found' }
      const newEnd = new Date(new Date(`${target.start_date}T${target.end_time}`).getTime() + extraMinutes * 60000)
      const newEndStr = newEnd.toTimeString().slice(0,8)
      const newTotal = (target.total_amount || 0) + extraMinutes * extraCostPerMinute
      const { data, error } = await supabase
        .from(TABLES.BOOKINGS)
        .update({ end_time: newEndStr, total_amount: newTotal })
        .eq('id', bookingId)
        .select()
        .single()
      if (error) return { data: null, error }
      setBookings(prev => prev.map(b => b.id === bookingId ? data : b))
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
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

  // Refresh all data
  const refreshData = async () => {
    if (isDummyMode) return
    
    setLoading(true)
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
      console.error('Error refreshing data:', error)
    } finally {
      setLoading(false)
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
    refreshData,
    createService,
    updateService,
    deleteService,
    createBooking,
    updateBookingStatus,
    endServiceNow,
    extendService,
    createReview,
  }

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}


