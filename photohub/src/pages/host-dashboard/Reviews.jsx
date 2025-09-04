import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Star, 
  Filter,
  MessageSquare,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react'
import { useStore } from '@/contexts/StoreContext'
import { useAuth } from '@/contexts/AuthContext'
import RatingStars from '@/components/ui/RatingStars'

const Reviews = () => {
  const { reviews } = useStore()
  const { user } = useAuth()
  const [selectedRating, setSelectedRating] = useState('all')
  const [sortBy, setSortBy] = useState('newest')

  // Filter reviews for current host
  const hostReviews = reviews.filter(r => r.host_id === user?.id)

  // Calculate average rating
  const averageRating = hostReviews.length > 0 
    ? (hostReviews.reduce((sum, r) => sum + (r.rating || 0), 0) / hostReviews.length).toFixed(1)
    : 0

  // Rating distribution
  const ratingDistribution = {
    5: hostReviews.filter(r => r.rating === 5).length,
    4: hostReviews.filter(r => r.rating === 4).length,
    3: hostReviews.filter(r => r.rating === 3).length,
    2: hostReviews.filter(r => r.rating === 2).length,
    1: hostReviews.filter(r => r.rating === 1).length,
  }

  // Filter and sort reviews
  const filteredReviews = hostReviews
    .filter(r => selectedRating === 'all' || r.rating === parseInt(selectedRating))
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.created_at) - new Date(a.created_at)
      if (sortBy === 'oldest') return new Date(a.created_at) - new Date(b.created_at)
      if (sortBy === 'highest') return b.rating - a.rating
      if (sortBy === 'lowest') return a.rating - b.rating
      return 0
    })

  const getRatingColor = (rating) => {
    if (rating >= 4) return 'text-green-600'
    if (rating >= 3) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getRatingLabel = (rating) => {
    if (rating === 5) return 'Excellent'
    if (rating === 4) return 'Very Good'
    if (rating === 3) return 'Good'
    if (rating === 2) return 'Fair'
    if (rating === 1) return 'Poor'
    return 'No Rating'
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reviews</h1>
          <p className="text-gray-600">See what your customers are saying about your services.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="btn-outline">Export Reviews</button>
          <button className="btn-primary">Respond to Reviews</button>
        </div>
      </div>

      {/* Rating Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Average Rating Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Overall Rating</h2>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="text-center">
              <div className={`text-4xl font-bold ${getRatingColor(averageRating)}`}>
                {averageRating}
              </div>
              <div className="flex items-center justify-center mt-2">
                <RatingStars rating={parseFloat(averageRating)} size="lg" />
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {getRatingLabel(parseFloat(averageRating))}
              </p>
              <p className="text-sm text-gray-500">
                Based on {hostReviews.length} reviews
              </p>
            </div>

            <div className="flex-1">
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => {
                  const count = ratingDistribution[rating]
                  const percentage = hostReviews.length > 0 ? (count / hostReviews.length) * 100 : 0
                  
                  return (
                    <div key={rating} className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1 w-16">
                        <span className="text-sm text-gray-600">{rating}</span>
                        <Star className="w-4 h-4 text-yellow-400" />
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-400 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-12 text-right">
                        {count}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <ThumbsUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Positive Reviews</p>
                <p className="text-2xl font-bold text-gray-900">
                  {hostReviews.filter(r => r.rating >= 4).length}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              {hostReviews.length > 0 
                ? `${Math.round((hostReviews.filter(r => r.rating >= 4).length / hostReviews.length) * 100)}% of total reviews`
                : 'No reviews yet'
              }
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">With Comments</p>
                <p className="text-2xl font-bold text-gray-900">
                  {hostReviews.filter(r => r.comment).length}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Reviews that include written feedback
            </p>
          </motion.div>
        </div>
      </div>

      {/* Reviews List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200"
      >
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Customer Reviews ({filteredReviews.length})
            </h2>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="highest">Highest Rated</option>
                <option value="lowest">Lowest Rated</option>
              </select>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-6 hover:bg-gray-50"
              >
                <div className="flex items-start space-x-4">
                  {/* Customer Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {review.customer_name?.charAt(0) || 'C'}
                    </span>
                  </div>

                  {/* Review Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-sm font-medium text-gray-900">
                          {review.customer_name || 'Customer'}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {new Date(review.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RatingStars rating={review.rating} size="sm" />
                        <span className={`text-sm font-medium ${getRatingColor(review.rating)}`}>
                          {review.rating}/5
                        </span>
                      </div>
                    </div>

                    {review.comment && (
                      <p className="text-gray-700 mb-3">
                        {review.comment}
                      </p>
                    )}

                    {/* Review Metadata */}
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Service: {review.service_title || 'Unknown Service'}</span>
                      <span>Booking: {review.booking_id}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-3 mt-4">
                      <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                        Reply
                      </button>
                      <button className="text-sm text-gray-500 hover:text-gray-700">
                        Flag as inappropriate
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="p-12 text-center">
              <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {selectedRating === 'all' ? 'No reviews yet' : `No ${selectedRating}-star reviews`}
              </h3>
              <p className="text-gray-500">
                {selectedRating === 'all' 
                  ? "When customers leave reviews, they'll appear here."
                  : `No customers have given ${selectedRating}-star ratings yet.`
                }
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Review Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Review Trends</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">This Month</span>
              <span className="text-sm font-medium text-gray-900">
                {hostReviews.filter(r => 
                  new Date(r.created_at) >= new Date(new Date().getFullYear(), new Date().getMonth(), 1)
                ).length} reviews
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Last Month</span>
              <span className="text-sm font-medium text-gray-900">
                {hostReviews.filter(r => {
                  const lastMonth = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1)
                  const thisMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1)
                  return new Date(r.created_at) >= lastMonth && new Date(r.created_at) < thisMonth
                }).length} reviews
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Response Rate</h3>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {hostReviews.length > 0 ? '85%' : '0%'}
            </div>
            <p className="text-sm text-gray-600">
              of reviews have been responded to
            </p>
            <button className="mt-4 btn-primary text-sm">
              Respond to Pending
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Reviews

