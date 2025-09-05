import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, MapPin, Clock, DollarSign } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { useStore } from '@/contexts/StoreContext'
import BookingForm from '@/components/ui/BookingForm'
import RatingStars from '@/components/ui/RatingStars'
import { ImageCarousel } from '@/components/ui/ImageComponents'

const BookingPage = () => {
  const { serviceId } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const { services, createBooking } = useStore()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const service = services.find(s => s.id === serviceId)

  const formatINR = (value) => {
    if (value === null || value === undefined) return ''
    try {
      return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)
    } catch {
      return `₹${value}`
    }
  }

  useEffect(() => {
    if (!service) {
      navigate('/services')
    }
  }, [service, navigate])

  const handleBookingSubmit = async (bookingData) => {
    setLoading(true)
    try {
      const { data, error } = await createBooking({
        ...bookingData,
        customer_id: user.id,
      })
      
      if (error) {
        console.error('Booking error:', error)
        alert('Failed to create booking. Please try again.')
      } else {
        setSuccess(true)
        setTimeout(() => {
          navigate('/customer/dashboard')
        }, 3000)
      }
    } catch (err) {
      console.error('Booking error:', err)
      alert('An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading service...</p>
        </div>
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card p-8 text-center max-w-md"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your booking has been successfully created. You'll receive a confirmation email shortly.
          </p>
          <button
            onClick={() => navigate('/customer/dashboard')}
            className="btn-primary"
          >
            Go to Dashboard
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="card p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h1>
              
              {/* Service Image */}
              <div className="aspect-video overflow-hidden rounded-lg mb-6">
                <ImageCarousel 
                  images={service.images} 
                  className="w-full h-full" 
                />
              </div>

              {/* Service Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <RatingStars rating={service.rating} />
                    <span className="text-sm text-gray-600">
                      {service.rating} ({service.review_count} reviews)
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-primary-600">
                    {formatINR(service.hourly_rate)}/hr
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{service.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{formatINR(service.daily_rate)}/day</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">{service.description}</p>

                {/* Tags */}
                {service.tags && service.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BookingForm
              service={service}
              onSubmit={handleBookingSubmit}
              loading={loading}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BookingPage


