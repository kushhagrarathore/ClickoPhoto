import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, MapPin, Camera, Calendar } from 'lucide-react'
import { useStore } from '@/contexts/StoreContext'
import { useAuth } from '@/contexts/AuthContext'
import RatingStars from '@/components/ui/RatingStars'

const Profile = () => {
  const { id } = useParams()
  const { services, reviews } = useStore()
  const { user, profile } = useAuth()

  // Use authenticated user's profile if viewing own profile, otherwise fetch by ID
  const isOwnProfile = user && id === user.id
  const displayProfile = isOwnProfile ? profile : {
    id: id,
    full_name: 'John Smith',
    email: 'john@example.com',
    role: 'host',
    avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    bio: 'Professional photographer with 8+ years of experience specializing in weddings and corporate events.',
    location: 'San Francisco, CA',
    rating: 4.8,
    review_count: 127,
    created_at: '2024-01-15T10:00:00Z',
  }

  const hostServices = services.filter(s => s.host_id === id)
  const hostReviews = reviews.filter(r => r.host_id === id)

  // If no profile data, show loading or fallback
  if (!displayProfile) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8">
            <p className="text-gray-600">Loading profile...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Avatar */}
            <div className="w-24 h-24 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center">
              {displayProfile.avatar_url ? (
                <img 
                  src={displayProfile.avatar_url} 
                  alt={displayProfile.full_name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-white text-2xl font-bold">
                  {displayProfile.full_name?.charAt(0) || 'U'}
                </span>
              )}
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {displayProfile.full_name || 'User'}
              </h1>
              <p className="text-gray-600 mb-4">
                {displayProfile.bio || 'No bio available'}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                {displayProfile.location && (
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{displayProfile.location}</span>
                  </div>
                )}
                {displayProfile.rating && (
                  <div className="flex items-center space-x-2">
                    <RatingStars rating={displayProfile.rating} />
                    <span>{displayProfile.rating} ({displayProfile.review_count || 0} reviews)</span>
                  </div>
                )}
                <div className="flex items-center space-x-1">
                  <Camera className="w-4 h-4" />
                  <span>{hostServices.length} services</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button className="btn-primary">Contact</button>
              <button className="btn-outline">View Portfolio</button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Services</h2>
              
              {hostServices.length === 0 ? (
                <p className="text-gray-600">No services available.</p>
              ) : (
                <div className="space-y-4">
                  {hostServices.map((service) => (
                    <div key={service.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={service.images?.[0] || 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400'}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                          <span>${service.hourly_rate}/hr</span>
                          <span>${service.daily_rate}/day</span>
                        </div>
                      </div>
                      <button className="btn-primary text-sm">Book Now</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Reviews</h2>
              
              {hostReviews.length === 0 ? (
                <p className="text-gray-600">No reviews yet.</p>
              ) : (
                <div className="space-y-4">
                  {hostReviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <RatingStars rating={review.rating} size="sm" />
                        <span className="text-sm text-gray-500">
                          {new Date(review.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Profile


