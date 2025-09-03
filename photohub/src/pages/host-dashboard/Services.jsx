import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff,
  Package,
  DollarSign,
  Calendar,
  Star,
  MapPin,
  X
} from 'lucide-react'
import { useStore } from '@/contexts/StoreContext'
import { useAuth } from '@/contexts/AuthContext'

const Services = () => {
  const { services, createService, updateService } = useStore()
  const { user } = useAuth()
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingService, setEditingService] = useState(null)

  // Filter services for current host
  const hostServices = services.filter(s => s.host_id === user?.id)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    subcategory: '',
    pricing_type: 'HOURLY',
    hourly_rate: '',
    daily_rate: '',
    fixed_rate: '',
    location: '',
    is_available: true
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
    
    const serviceData = {
      ...formData,
      host_id: user.id,
      hourly_rate: formData.pricing_type === 'HOURLY' ? parseFloat(formData.hourly_rate) : null,
      daily_rate: formData.pricing_type === 'DAILY' ? parseFloat(formData.daily_rate) : null,
      fixed_rate: formData.pricing_type === 'FIXED' ? parseFloat(formData.fixed_rate) : null,
    }

    if (editingService) {
      await updateService(editingService.id, serviceData)
      setEditingService(null)
    } else {
      await createService(serviceData)
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
      location: '',
      is_available: true
    })
    setShowAddForm(false)
  }

  const handleEdit = (service) => {
    setEditingService(service)
    setFormData({
      title: service.title || '',
      description: service.description || '',
      category: service.category || '',
      subcategory: service.subcategory || '',
      pricing_type: service.pricing_type || 'HOURLY',
      hourly_rate: service.hourly_rate || '',
      daily_rate: service.daily_rate || '',
      fixed_rate: service.fixed_rate || '',
      location: service.location || '',
      is_available: service.is_available !== false
    })
    setShowAddForm(true)
  }

  const getPricingDisplay = (service) => {
    switch (service.pricing_type) {
      case 'HOURLY':
        return `$${service.hourly_rate}/hr`
      case 'DAILY':
        return `$${service.daily_rate}/day`
      case 'FIXED':
        return `$${service.fixed_rate}`
      default:
        return 'Price not set'
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
                    location: '',
                    is_available: true
                  })
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Title *
                  </label>
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subcategory
                  </label>
                  <input
                    type="text"
                    name="subcategory"
                    value={formData.subcategory}
                    onChange={handleInputChange}
                    className="input-field w-full"
                    placeholder="e.g., Wedding, Corporate, Portrait"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="input-field w-full"
                    placeholder="e.g., San Francisco, CA"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pricing Type *
                  </label>
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {formData.pricing_type === 'HOURLY' ? 'Hourly Rate' : 
                     formData.pricing_type === 'DAILY' ? 'Daily Rate' : 'Fixed Price'} *
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
                    step="0.01"
                    className="input-field w-full"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="input-field w-full"
                  placeholder="Describe your service, experience, and what customers can expect..."
                />
              </div>

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

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false)
                    setEditingService(null)
                  }}
                  className="btn-outline"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  {editingService ? 'Update Service' : 'Create Service'}
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
              <div className="h-48 bg-gradient-to-br from-primary-50 to-purple-50 flex items-center justify-center">
                <Package className="w-16 h-16 text-primary-400" />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {service.title}
                  </h3>
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
                    service.is_available 
                      ? 'text-green-600 bg-green-100' 
                      : 'text-red-600 bg-red-100'
                  }`}>
                    {service.is_available ? (
                      <>
                        <Eye className="w-3 h-3 mr-1" />
                        Available
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3 h-3 mr-1" />
                        Unavailable
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
            <p className="text-gray-500 mb-6">
              Create your first service listing to start attracting customers.
            </p>
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
    </div>
  )
}

export default Services
