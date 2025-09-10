import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured, TABLES } from '@/lib/supabaseClient'
import { dummyServices, dummyBookings, dummyReviews, categories, subcategories } from '@/lib/dummyData'
import { cleanupServiceImages, parseServiceImages } from '@/utils/imageUtils'

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
  const [bookingOtps, setBookingOtps] = useState({}) // ephemeral OTP store: { [bookingId]: code }
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
      let query = supabase.from(TABLES.SERVICES).select('*')
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
        ? dummyBookings.filter(b => b.customer_id === userId || b.host_id === userId)
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
      // Ensure a user_profiles row exists and get its primary key (id)
      let userProfileId = null
      try {
        const authUserResp = await supabase.auth.getUser()
        const authUser = authUserResp?.data?.user || null
        if (!authUser?.id) throw new Error('Not authenticated')

        const { data: existingProfile } = await supabase
          .from('user_profiles')
          .select('id')
          .eq('user_id', authUser.id)
          .maybeSingle()

        if (existingProfile?.id) {
          userProfileId = existingProfile.id
        } else {
          const { data: newProfile, error: insertProfileErr } = await supabase
            .from('user_profiles')
            .insert([{
              user_id: authUser.id,
              email: authUser?.email || bookingData.customer_email,
              full_name: bookingData.customer_name || authUser?.user_metadata?.full_name || '',
              phone: '',
              location: '',
            }])
            .select('id')
            .single()
          if (insertProfileErr) throw insertProfileErr
          userProfileId = newProfile?.id || null
        }
      } catch (ensureErr) {
        console.warn('user_profiles ensure failed:', ensureErr?.message || ensureErr)
      }

      // Map UI camelCase fields to DB snake_case schema
      // Primary target: your actual schema (user_id, host_id, start_date, start_time, end_time)
      const payload = {
        service_id: bookingData.serviceId,
        user_id: userProfileId, // RLS ties this to auth.uid via user_profiles
        host_id: bookingData.hostId,
        start_date: bookingData.startDateStr, // 'YYYY-MM-DD'
        start_time: bookingData.startTimeStr, // 'HH:MM:SS'
        end_time: bookingData.endTimeStr,     // 'HH:MM:SS'
        duration_hours: bookingData.durationType === 'hours' ? bookingData.duration : bookingData.duration * 24,
        total_amount: bookingData.totalAmount,
        status: 'CONFIRMED',
        special_requirements: bookingData.specialRequests ?? null,
        service_type: bookingData.service_type || null,
        customer_name: bookingData.customer_name || null,
        customer_location: bookingData.customer_location || null,
      }

      let insertedId = null
      let insertError = null
      // Attempt 1: snake_case (v2 schema)
      try {
        const { data, error } = await supabase
          .from(TABLES.BOOKINGS)
          .insert([payload])
          .select('id')
          .single()
        if (error) throw error
        insertedId = data?.id || null
      } catch (e1) {
        insertError = e1
        // Attempt 2: camelCase columns (fallback)
        try {
          const camelPayload = {
            serviceId: bookingData.serviceId,
            userId: bookingData.customer_id,
            hostId: bookingData.hostId,
            startDate: bookingData.startDate,
            startTime: bookingData.startTimeStr,
            endTime: bookingData.endTimeStr,
            durationHours: payload.duration_hours,
            totalAmount: bookingData.totalAmount,
            status: 'CONFIRMED',
            specialRequirements: bookingData.specialRequests ?? null,
          }
          const { data, error } = await supabase
            .from(TABLES.BOOKINGS)
            .insert([camelPayload])
            .select('id')
            .single()
          if (error) throw error
          insertedId = data?.id || null
          insertError = null
        } catch (e2) {
          insertError = e2
          // Attempt 3: start_time/end_time variant (snake_case older schema)
          try {
            const timePayload = {
              service_id: bookingData.serviceId,
              user_id: bookingData.customer_id,
              host_id: bookingData.hostId,
              start_date: bookingData.startDateStr,
              start_time: bookingData.startTimeStr,
              end_time: bookingData.endTimeStr,
              duration_hours: payload.duration_hours,
              total_amount: bookingData.totalAmount,
              status: 'CONFIRMED',
              payment_status: 'PENDING',
              special_requirements: bookingData.specialRequests ?? null,
            }
            const { data, error } = await supabase
              .from(TABLES.BOOKINGS)
              .insert([timePayload])
              .select('id')
              .single()
            if (error) throw error
            insertedId = data?.id || null
            insertError = null
          } catch (e3) {
            insertError = e3
          }
        }
      }
      if (insertError) {
        console.error('Supabase insert error:', insertError)
        return { data: null, error: insertError }
      }
      // Optimistically add a local representation for immediate UX feedback
      setBookings(prev => [
        ...prev,
        {
          id: insertedId || crypto?.randomUUID?.() || Date.now().toString(),
          ...payload,
          created_at: new Date().toISOString(),
        },
      ])
      // Notify host via realtime broadcast (non-persistent)
      try {
        const channel = supabase.channel(`host:${payload.host_id}`)
        await channel.subscribe()
        channel.send({
          type: 'broadcast',
          event: 'booking_created',
          payload: {
            booking_id: insertedId,
            customer_name: bookingData.customer_name,
            customer_location: bookingData.customer_location,
            service_type: bookingData.service_type,
            service_id: payload.service_id,
            user_id: payload.user_id,
            start_date: payload.start_date,
            start_time: payload.start_time,
            end_time: payload.end_time,
            total_amount: payload.total_amount,
          },
        })
        // Optional: unsubscribe after sending to avoid leaked channels
        setTimeout(() => channel.unsubscribe(), 500)
      } catch {}
      return { data: { id: insertedId, ...payload }, error: null }
    } catch (error) {
      console.error('Unexpected booking error:', error)
      return { data: null, error }
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

  // Issue OTP for a booking (host action)
  const issueBookingOtp = async (bookingId) => {
    const code = String(Math.floor(100000 + Math.random() * 900000))
    setBookingOtps(prev => ({ ...prev, [bookingId]: code }))
    try {
      const channel = supabase.channel(`booking:${bookingId}`)
      await channel.subscribe()
      channel.send({ type: 'broadcast', event: 'otp_issued', payload: { booking_id: bookingId, code } })
      setTimeout(() => channel.unsubscribe(), 500)
    } catch {}
    return code
  }

  // Verify OTP (customer action) and complete booking
  const verifyBookingOtp = async (bookingId, code) => {
    const expected = bookingOtps[bookingId]
    if (!expected || expected !== String(code)) {
      return { ok: false, error: 'Invalid or expired OTP' }
    }
    const res = await updateBookingStatus(bookingId, 'COMPLETED')
    if (!res.error) {
      setBookingOtps(prev => { const { [bookingId]: _, ...rest } = prev; return rest })
      try {
        const channel = supabase.channel(`booking:${bookingId}`)
        await channel.subscribe()
        channel.send({ type: 'broadcast', event: 'otp_verified', payload: { booking_id: bookingId } })
        setTimeout(() => channel.unsubscribe(), 500)
      } catch {}
      return { ok: true }
    }
    return { ok: false, error: res.error }
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
    deleteService,
    createBooking,
    updateBookingStatus,
    issueBookingOtp,
    verifyBookingOtp,
    createReview,
  }

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}


