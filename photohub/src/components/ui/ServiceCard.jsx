import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, MapPin, Clock, DollarSign, Heart } from 'lucide-react'
import RatingStars from './RatingStars'
import { ImageCarousel } from './ImageComponents'
import { parseServiceImages } from '@/utils/imageUtils'

const ServiceCard = ({ service, onFavorite, isFavorited = false }) => {
  const {
    id,
    title,
    description,
    hourly_rate,
    daily_rate,
    location,
    images,
    rating,
    review_count,
    host,
    tags,
    is_available,
  } = service

  const formatINR = (value) => {
    if (value === null || value === undefined) return ''
    try {
      return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)
    } catch {
      return `₹${value}`
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card group overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden">
        <ImageCarousel 
          images={images} 
          className="w-full h-full transition-transform duration-300 group-hover:scale-105" 
        />
        
        {/* Favorite Button */}
        <button
          onClick={() => onFavorite?.(id)}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors z-10"
        >
          <Heart 
            className={`w-4 h-4 ${
              isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`} 
          />
        </button>

        {/* Availability Badge */}
        {!is_available && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs rounded-full z-10">
            Unavailable
          </div>
        )}

        {/* Price Badge */}
        <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm z-10">
          <span className="text-sm font-semibold text-gray-900">
            {formatINR(hourly_rate)}/hr
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title and Rating */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
            {title}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-3">
          <RatingStars rating={rating} size="sm" />
          <span className="text-sm text-gray-600">
            {rating} ({review_count} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Location and Pricing */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">{formatINR(hourly_rate)}/hr</span>
              </div>
              <div className="flex items-center space-x-1">
                <DollarSign className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">{formatINR(daily_rate)}/day</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Host Info */}
        {host && (
          <div className="flex items-center space-x-3 mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {host.name?.charAt(0) || 'H'}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{host.name}</p>
              <p className="text-xs text-gray-600">{host.role}</p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Link
            to={`/booking/${id}`}
            className="flex-1 btn-primary text-center"
          >
            Book Now
          </Link>
          <Link
            to={`/profile/${host?.id || 'host'}`}
            className="btn-outline text-center"
          >
            View Profile
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard


