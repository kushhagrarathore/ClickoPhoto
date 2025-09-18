import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  DollarSign,
  SlidersHorizontal,
  X,
  Grid,
  List,
  ChevronRight,
  Home,
  Camera
} from 'lucide-react'
import { useStore } from '@/contexts/StoreContext'
import EnhancedServiceCard from '@/components/ui/EnhancedServiceCard'
import { ServiceCardSkeleton, FilterPanelSkeleton } from '@/components/ui/SkeletonLoader'

const EnhancedServiceListing = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { services, categories, subcategories, fetchServices } = useStore()
  const [filteredServices, setFilteredServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState([])

  // Filter states
  const [filters, setFilters] = useState({
    search: '',
    category: searchParams.get('category') || '',
    subcategory: '',
    location: '',
    maxPrice: '',
    minRating: '',
    sortBy: 'rating',
  })

  useEffect(() => {
    const loadServices = async () => {
      setLoading(true)
      try {
        const servicesData = await fetchServices(filters)
        setFilteredServices(servicesData)
      } catch (error) {
        console.error('Error loading services:', error)
      } finally {
        setLoading(false)
      }
    }

    loadServices()
  }, [filters, fetchServices])

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
    
    // Update URL params
    const newParams = new URLSearchParams(searchParams)
    if (value) {
      newParams.set(key, value)
    } else {
      newParams.delete(key)
    }
    setSearchParams(newParams)
  }

  const clearFilters = () => {
    setFilters({
      search: '',
      category: '',
      subcategory: '',
      location: '',
      maxPrice: '',
      minRating: '',
      sortBy: 'rating',
    })
    setSearchParams({})
  }

  const handleFavorite = (serviceId) => {
    setFavorites(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  const handleBookNow = (service) => {
    // Navigate to booking page or open booking modal
    console.log('Book now:', service)
  }

  const sortServices = (services) => {
    return [...services].sort((a, b) => {
      switch (filters.sortBy) {
        case 'price':
          return a.hourly_rate - b.hourly_rate
        case 'newest':
          return new Date(b.created_at) - new Date(a.created_at)
        case 'rating':
        default:
          return b.rating - a.rating
      }
    })
  }

  const sortedServices = sortServices(filteredServices)
  const activeFiltersCount = Object.values(filters).filter(value => value && value !== 'rating').length

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Browse Services', href: '/services', icon: Camera, current: true }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            {breadcrumbs.map((item, index) => (
              <li key={item.name} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
                <div className="flex items-center space-x-2">
                  <item.icon className="w-4 h-4 text-gray-400" />
                  <a
                    href={item.href}
                    className={`text-sm font-medium ${
                      item.current 
                        ? 'text-gray-900 dark:text-white' 
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    {item.name}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Find Photography Services
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover professional photographers, drone operators, and studio rentals
          </p>
        </motion.div>

        {/* Search and Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, photographers, or locations..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Filter Toggle */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span className="font-medium">Filters</span>
                {activeFiltersCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs rounded-full px-2 py-1 font-medium"
                  >
                    {activeFiltersCount}
                  </motion.span>
                )}
              </motion.button>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-2 px-4 py-4 transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                      : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex items-center gap-2 px-4 py-4 transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                      : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Filters Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
              >
                {loading ? (
                  <FilterPanelSkeleton />
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Category Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                        <select
                          value={filters.category}
                          onChange={(e) => handleFilterChange('category', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                        >
                          <option value="">All Categories</option>
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Subcategory Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subcategory</label>
                        <select
                          value={filters.subcategory}
                          onChange={(e) => handleFilterChange('subcategory', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                          disabled={!filters.category}
                        >
                          <option value="">All Subcategories</option>
                          {filters.category && subcategories[filters.category]?.map((sub) => (
                            <option key={sub.id} value={sub.id}>
                              {sub.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Location Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="text"
                            placeholder="Enter location..."
                            value={filters.location}
                            onChange={(e) => handleFilterChange('location', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Price Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Max Price/Hour</label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="number"
                            placeholder="Enter max price..."
                            value={filters.maxPrice}
                            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Additional Filters */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Rating Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Minimum Rating</label>
                        <select
                          value={filters.minRating}
                          onChange={(e) => handleFilterChange('minRating', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                        >
                          <option value="">Any Rating</option>
                          <option value="4">4+ Stars</option>
                          <option value="4.5">4.5+ Stars</option>
                          <option value="5">5 Stars</option>
                        </select>
                      </div>

                      {/* Sort By */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                        <select
                          value={filters.sortBy}
                          onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                        >
                          <option value="rating">Highest Rated</option>
                          <option value="price">Lowest Price</option>
                          <option value="newest">Newest</option>
                        </select>
                      </div>

                      {/* Clear Filters */}
                      <div className="flex items-end">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={clearFilters}
                          className="flex items-center gap-2 px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                        >
                          <X className="w-4 h-4" />
                          Clear All Filters
                        </motion.button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400">
              {loading ? 'Loading...' : `${sortedServices.length} services found`}
            </p>
            {activeFiltersCount > 0 && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={clearFilters}
                className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
              >
                Clear all filters
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Services Grid/List */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <ServiceCardSkeleton key={index} />
            ))}
          </div>
        ) : sortedServices.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No services found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your filters or search terms to find what you're looking for.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={clearFilters}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
            >
              Clear All Filters
            </motion.button>
          </motion.div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            <AnimatePresence>
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <EnhancedServiceCard
                    service={service}
                    onFavorite={handleFavorite}
                    isFavorited={favorites.includes(service.id)}
                    onBookNow={handleBookNow}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Quick Action Floating Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-40"
        >
          <Camera className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  )
}

export default EnhancedServiceListing



