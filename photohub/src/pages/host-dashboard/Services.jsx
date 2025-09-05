import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, Edit, Trash2, Eye, EyeOff, Package, DollarSign, Calendar, Star, MapPin, X
} from 'lucide-react'
import { useStore } from '@/contexts/StoreContext'
import { useAuth } from '@/contexts/AuthContext'

// Minimal India states list (extend as needed)
const INDIA_STATES = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Delhi','Jammu and Kashmir','Ladakh','Puducherry','Chandigarh','Andaman and Nicobar Islands','Dadra and Nagar Haveli and Daman and Diu','Lakshadweep'
]

const Services = () => {
  const { services, createService, updateService } = useStore()
  const { user, profile } = useAuth()
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingService, setEditingService] = useState(null)
  const [activeImage, setActiveImage] = useState({})
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0 })
  const [submitState, setSubmitState] = useState({ loading: false, error: '', success: '' })

  // Filter services for current host (use host profile id)
  const hostServices = services.filter(s => s.host_id === profile?.id)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    subcategory: '',
    pricing_type: 'HOURLY',
    hourly_rate: '',
    daily_rate: '',
    fixed_rate: '',
    city: '',
    state: '',
    is_available: true,
    images: []
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitState({ loading: true, error: '', success: '' })
    
    const location = [formData.city, formData.state].filter(Boolean).join(', ')

    const serviceData = {
      ...formData,
      host_id: profile?.id,
      location,
      hourly_rate: formData.pricing_type === 'HOURLY' ? parseFloat(formData.hourly_rate) : null,
      daily_rate: formData.pricing_type === 'DAILY' ? parseFloat(formData.daily_rate) : null,
      fixed_rate: formData.pricing_type === 'FIXED' ? parseFloat(formData.fixed_rate) : null,
      images: formData.images.filter(link => link.trim() !== '')
    }

    try {
      if (editingService) {
        const { error } = await updateService(editingService.id, serviceData)
        if (error) throw new Error(error)
        setEditingService(null)
      } else {
        const { error } = await createService(serviceData)
        if (error) throw new Error(error)
      }

      setFormData({
      title: '',
      description: '',
      category: '',
      subcategory: '',
      pricing_type: 'HOURLY',
      hourly_rate: '',
      daily_rate: '',
      fixed_rate: '',
      city: '',
      state: '',
      is_available: true,
      images: []
    })
      setShowAddForm(false)
      setSubmitState({ loading: false, error: '', success: 'Service saved successfully' })
    } catch (err) {
      setSubmitState({ loading: false, error: err.message || 'Failed to save service', success: '' })
    }
  }

  const handleEdit = (service) => {
    setEditingService(service)
    let city = ''
    let state = ''
    if (service.location) {
      const parts = service.location.split(',').map(p => p.trim())
      if (parts.length >= 2) {
        city = parts[0]
        state = parts.slice(1).join(', ')
      } else {
        city = service.location
      }
    }

    setFormData({
      title: service.title || '',
      description: service.description || '',
      category: service.category || '',
      subcategory: service.subcategory || '',
      pricing_type: service.pricing_type || 'HOURLY',
      hourly_rate: service.hourly_rate || '',
      daily_rate: service.daily_rate || '',
      fixed_rate: service.fixed_rate || '',
      city,
      state,
      is_available: service.is_available !== false,
      images: service.images || []
    })
    setShowAddForm(true)
  }

  const formatINR = (value) => {
    if (value === null || value === undefined) return ''
    try {
      return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)
    } catch {
      return `₹${value}`
    }
  }

  const getPricingDisplay = (service) => {
    switch (service.pricing_type) {
      case 'HOURLY': return `${formatINR(service.hourly_rate)}/hr`
      case 'DAILY': return `${formatINR(service.daily_rate)}/day`
      case 'FIXED': return `${formatINR(service.fixed_rate)}`
      default: return 'Price not set'
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Services</h1>
          <p className="text-gray-600">Manage your service listings and attract more customers.</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Service</span>
        </button>
      </div>

      {/* Add/Edit Service Form */}
      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                {editingService ? 'Edit Service' : 'Add New Service'}
              </h2>
              <button
                onClick={() => {
                  setShowAddForm(false)
                  setEditingService(null)
                  setFormData({
                    title: '',
                    description: '',
                    category: '',
                    subcategory: '',
                    pricing_type: 'HOURLY',
                    hourly_rate: '',
                    daily_rate: '',
                    fixed_rate: '',
                    city: '',
                    state: '',
                    is_available: true,
                    images: []
                  })
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="input-field w-full"
                    placeholder="e.g., Professional Wedding Photography"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="input-field w-full"
                  >
                    <option value="">Select Category</option>
                    <option value="PHOTOGRAPHY">Photography</option>
                    <option value="VIDEOGRAPHY">Videography</option>
                    <option value="DRONE">Drone</option>
                    <option value="STUDIO">Studio</option>
                  </select>
                </div>

                {/* Subcategory */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subcategory</label>
                  <input
                    type="text"
                    name="subcategory"
                    value={formData.subcategory}
                    onChange={handleInputChange}
                    className="input-field w-full"
                    placeholder="e.g., Wedding, Corporate, Portrait"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="input-field w-full"
                    placeholder="e.g., Mumbai"
                  />
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="input-field w-full"
                  >
                    <option value="">Select State</option>
                    {INDIA_STATES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Pricing */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pricing Type (INR) *</label>
                  <select
                    name="pricing_type"
                    value={formData.pricing_type}
                    onChange={handleInputChange}
                    required
                    className="input-field w-full"
                  >
                    <option value="HOURLY">Hourly Rate</option>
                    <option value="DAILY">Daily Rate</option>
                    <option value="FIXED">Fixed Price</option>
                  </select>
                </div>

                {/* Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {formData.pricing_type === 'HOURLY' ? 'Hourly Rate (₹)' : 
                     formData.pricing_type === 'DAILY' ? 'Daily Rate (₹)' : 'Fixed Price (₹)'} *
                  </label>
                  <input
                    type="number"
                    name={formData.pricing_type === 'HOURLY' ? 'hourly_rate' : 
                          formData.pricing_type === 'DAILY' ? 'daily_rate' : 'fixed_rate'}
                    value={formData.pricing_type === 'HOURLY' ? formData.hourly_rate : 
                           formData.pricing_type === 'DAILY' ? formData.daily_rate : formData.fixed_rate}
                    onChange={handleInputChange}
                    required
                    min="0"
                    step="1"
                    className="input-field w-full"
                    placeholder="0"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="input-field w-full"
                  placeholder="Describe your service..."
                />
              </div>

              {/* Images (Google Drive links) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Images (Google Drive Links)</label>
                <div className="space-y-2">
                  {formData.images.map((link, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <input
                        type="url"
                        value={link}
                        onChange={(e) => {
                          const updated = [...formData.images]
                          updated[idx] = e.target.value
                          setFormData(prev => ({ ...prev, images: updated }))
                        }}
                        className="input-field w-full"
                        placeholder="Paste Google Drive link"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const updated = formData.images.filter((_, i) => i !== idx)
                          setFormData(prev => ({ ...prev, images: updated }))
                        }}
                        className="btn-outline text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      setFormData(prev => ({ ...prev, images: [...prev.images, ''] }))
                    }
                    className="btn-outline text-primary-600"
                  >
                    + Add Image
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Please use public Google Drive links (anyone with link can view).
                </p>
              </div>

              {/* Availability */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="is_available"
                  checked={formData.is_available}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label className="text-sm font-medium text-gray-700">
                  Service is currently available for booking
                </label>
              </div>

              {/* Submit feedback */}
              {submitState.error && (
                <div className="p-3 rounded-md bg-red-50 text-red-700 text-sm">{submitState.error}</div>
              )}
              {submitState.success && (
                <div className="p-3 rounded-md bg-green-50 text-green-700 text-sm">{submitState.success}</div>
              )}

              {/* Buttons */}
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false)
                    setEditingService(null)
                    setSubmitState({ loading: false, error: '', success: '' })
                  }}
                  className="btn-outline"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary" disabled={submitState.loading}>
                  {submitState.loading ? 'Saving...' : (editingService ? 'Update Service' : 'Create Service')}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hostServices.length > 0 ? (
          hostServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              {/* Image Carousel */}
              <div className="relative h-48 bg-gray-100 overflow-hidden rounded-t-xl">
                {service.images && service.images.length > 0 ? (
                  <>
                    <motion.img
                      key={activeImage[service.id] || 0}
                      src={service.images[activeImage[service.id] || 0]
                        .replace("file/d/", "uc?export=view&id=")
                        .replace("/view?usp=sharing", "")}
                      alt={service.title}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() =>
                        setLightbox({ open: true, images: service.images, index: activeImage[service.id] || 0 })
                      }
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {service.images.length > 1 && (
                      <>
                        <button
                          onClick={() => {
                            setActiveImage(prev => ({
                              ...prev,
                              [service.id]: ((prev[service.id] || 0) - 1 + service.images.length) % service.images.length
                            }))
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/60"
                        >
                          ‹
                        </button>
                        <button
                          onClick={() => {
                            setActiveImage(prev => ({
                              ...prev,
                              [service.id]: ((prev[service.id] || 0) + 1) % service.images.length
                            }))
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/60"
                        >
                          ›
                        </button>
                      </>
                    )}

                    {service.images.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                        {service.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImage(prev => ({ ...prev, [service.id]: idx }))}
                            className={`w-2 h-2 rounded-full ${idx === (activeImage[service.id] || 0) ? "bg-white" : "bg-gray-400"}`}
                          />
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Package className="w-16 h-16 text-primary-400 absolute inset-0 m-auto" />
                )}
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{service.title}</h3>
                  <button
                    onClick={() => handleEdit(service)}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description || 'No description available'}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <span className="font-medium">{getPricingDisplay(service)}</span>
                  </div>
                  
                  {service.location && (
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{service.location}</span>
                    </div>
                  )}

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Star className="w-4 h-4" />
                    <span>{service.rating || 0} ({service.review_count || 0} reviews)</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{service.booking_count || 0} bookings</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    service.is_available ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
                  }`}>
                    {service.is_available ? (
                      <>
                        <Eye className="w-3 h-3 mr-1" /> Available
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3 h-3 mr-1" /> Unavailable
                      </>
                    )}
                  </span>

                  <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-full bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center"
          >
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No services yet</h3>
            <p className="text-gray-500 mb-6">Create your first service listing to start attracting customers.</p>
            <button
              onClick={() => setShowAddForm(true)}
              className="btn-primary"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Service
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          >
            <button
              onClick={() => setLightbox({ open: false, images: [], index: 0 })}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✕
            </button>

            <img
              src={lightbox.images[lightbox.index]
                .replace("file/d/", "uc?export=view&id=")
                .replace("/view?usp=sharing", "")}
              alt="Preview"
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />

            {lightbox.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setLightbox(prev => ({
                      ...prev,
                      index: (prev.index - 1 + prev.images.length) % prev.images.length
                    }))
                  }
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl"
                >
                  ‹
                </button>
                <button
                  onClick={() =>
                    setLightbox(prev => ({
                      ...prev,
                      index: (prev.index + 1) % prev.images.length
                    }))
                  }
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl"
                >
                  ›
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Services
