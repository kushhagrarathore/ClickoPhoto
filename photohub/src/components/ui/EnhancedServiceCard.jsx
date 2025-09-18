import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Star, 
  MapPin, 
  Clock, 
  Heart, 
  Eye, 
  Calendar,
  User,
  Camera,
  DollarSign
} from 'lucide-react'

const EnhancedServiceCard = ({ service, onFavorite, isFavorited, onBookNow }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleFavorite = (e) => {
    e.stopPropagation()
    onFavorite?.(service.id)
  }

  const handleBookNow = (e) => {
    e.stopPropagation()
    onBookNow?.(service)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
        )}
        <img
          src={service.images?.[0] || service.image || 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400'}
          alt={service.title}
          className={`w-full h-full object-cover transition-all duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${isHovered ? 'scale-105' : 'scale-100'}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Favorite Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleFavorite}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
            isFavorited 
              ? 'bg-red-500 text-white shadow-lg' 
              : 'bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-red-500 hover:text-white'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
        </motion.button>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-medium rounded-full backdrop-blur-sm">
            {service.category?.replace('_', ' ').toUpperCase() || 'PHOTOGRAPHY'}
          </span>
        </div>

        {/* Quick View Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            y: isHovered ? 0 : 10 
          }}
          className="absolute bottom-3 right-3 p-2 bg-white/90 dark:bg-gray-800/90 text-gray-600 dark:text-gray-300 rounded-full backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-colors"
        >
          <Eye className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Rating */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {service.title}
          </h3>
          
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {service.photographer || service.user?.full_name || 'Professional Photographer'}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {service.rating || 4.8}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                ({service.reviews || 127} reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Price and Duration */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <DollarSign className="w-4 h-4 text-green-500" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ${service.price || service.hourly_rate || 150}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">/hour</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{service.duration || '2 hours'}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-1 mb-4 text-gray-500 dark:text-gray-400">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{service.location || 'New York, NY'}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {service.description || 'Professional photography services with high-quality results and excellent customer service.'}
        </p>

        {/* Availability */}
        <div className="flex items-center space-x-1 mb-4 text-green-600 dark:text-green-400">
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-medium">
            {service.availability || 'Available this week'}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleBookNow}
            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Book Now
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            View Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default EnhancedServiceCard



