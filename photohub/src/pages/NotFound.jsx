import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Camera, Home, Search, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Icon */}
          <div className="w-24 h-24 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <Camera className="w-12 h-12 text-white" />
          </div>

          {/* Error Message */}
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link to="/" className="btn-primary w-full">
              <span className="flex items-center justify-center gap-2">
                <Home className="w-5 h-5" />
                Go to Homepage
              </span>
            </Link>
            
            <Link to="/services" className="btn-outline w-full">
              <span className="flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Browse Services
              </span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="flex items-center justify-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound


