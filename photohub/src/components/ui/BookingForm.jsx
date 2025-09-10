import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, DollarSign, User, MessageSquare } from 'lucide-react'

const BookingForm = ({ service, onSubmit, loading = false }) => {
  const [formData, setFormData] = useState({
    startDate: '',
    startTime: '',
    duration: 1,
    durationType: 'hours', // 'hours' or 'days'
    specialRequests: '',
  })

  const [errors, setErrors] = useState({})

  const formatINR = (value) => {
    if (value === null || value === undefined) return ''
    try {
      return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)
    } catch {
      return `₹${value}`
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.startDate) {
      newErrors.startDate = 'Start date is required'
    } else {
      const selectedDate = new Date(formData.startDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      if (selectedDate < today) {
        newErrors.startDate = 'Start date cannot be in the past'
      }
    }

    if (!formData.startTime) {
      newErrors.startTime = 'Start time is required'
    }

    if (formData.duration < 1) {
      newErrors.duration = 'Duration must be at least 1'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      const buildDateTime = (dateStr, timeStr) => {
        try {
          const [year, month, day] = String(dateStr).split('-').map(Number)
          const [hour, minute] = String(timeStr).split(':').map(Number)
          const dt = new Date()
          dt.setSeconds(0, 0)
          dt.setFullYear(year, (month || 1) - 1, day || 1)
          dt.setHours(hour || 0, minute || 0, 0, 0)
          return dt
        } catch {
          return new Date('invalid')
        }
      }

      const startDateTime = buildDateTime(formData.startDate, formData.startTime)
      const endDateTime = new Date(startDateTime)

      if (isNaN(startDateTime.getTime())) {
        setErrors(prev => ({ ...prev, startTime: 'Please select a valid date and time' }))
        return
      }
      
      if (formData.durationType === 'hours') {
        endDateTime.setHours(endDateTime.getHours() + formData.duration)
      } else {
        endDateTime.setDate(endDateTime.getDate() + formData.duration)
      }

      const totalAmount = formData.durationType === 'hours' 
        ? service.hourly_rate * formData.duration
        : service.daily_rate * formData.duration

      const pad = (n) => String(n).padStart(2, '0')
      const startDateStr = `${startDateTime.getFullYear()}-${pad(startDateTime.getMonth() + 1)}-${pad(startDateTime.getDate())}`
      const startTimeStr = `${pad(startDateTime.getHours())}:${pad(startDateTime.getMinutes())}:00`
      const endTimeStr = `${pad(endDateTime.getHours())}:${pad(endDateTime.getMinutes())}:00`

      onSubmit({
        serviceId: service.id,
        hostId: service.host_id,
        startDate: startDateTime.toISOString(),
        endDate: endDateTime.toISOString(),
        startDateStr,
        startTimeStr,
        endTimeStr,
        duration: formData.duration,
        durationType: formData.durationType,
        totalAmount,
        specialRequests: formData.specialRequests,
      })
    }
  }

  const calculateTotal = () => {
    if (!formData.duration) return 0
    
    return formData.durationType === 'hours' 
      ? service.hourly_rate * formData.duration
      : service.daily_rate * formData.duration
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card p-6"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Book This Service</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Date and Time Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className={`input-field ${errors.startDate ? 'border-red-500' : ''}`}
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.startDate && (
              <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="w-4 h-4 inline mr-2" />
              Start Time
            </label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
              className={`input-field ${errors.startTime ? 'border-red-500' : ''}`}
            />
            {errors.startTime && (
              <p className="text-red-500 text-sm mt-1">{errors.startTime}</p>
            )}
          </div>
        </div>

        {/* Duration Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration
            </label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              min="1"
              className={`input-field ${errors.duration ? 'border-red-500' : ''}`}
            />
            {errors.duration && (
              <p className="text-red-500 text-sm mt-1">{errors.duration}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration Type
            </label>
            <select
              name="durationType"
              value={formData.durationType}
              onChange={handleInputChange}
              className="input-field"
            >
              <option value="hours">Hours</option>
              <option value="days">Days</option>
            </select>
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Special Requests (Optional)
          </label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleInputChange}
            rows="3"
            placeholder="Any special requirements or requests..."
            className="input-field resize-none"
          />
        </div>

        {/* Pricing Summary */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">Pricing Summary</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Rate per {formData.durationType === 'hours' ? 'hour' : 'day'}:</span>
              <span className="font-medium">
                {formatINR(formData.durationType === 'hours' ? service.hourly_rate : service.daily_rate)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Duration:</span>
              <span className="font-medium">
                {formData.duration} {formData.durationType}
              </span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span className="text-primary-600">{formatINR(calculateTotal())}</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary py-3 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Processing...
            </div>
          ) : (
            `Book for ${formatINR(calculateTotal())}`
          )}
        </button>
      </form>
    </motion.div>
  )
}

export default BookingForm


