import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Camera, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Users,
  Award,
  Zap,
  Search,
  MapPin
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

const LandingPage = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleBrowseServices = () => {
    if (!user) {
      navigate('/auth')
    } else {
      navigate('/services')
    }
  }

  const features = [
    {
      icon: Search,
      title: 'Easy Discovery',
      description: 'Find the perfect photographer or drone operator with our advanced search and filtering system.'
    },
    {
      icon: Star,
      title: 'Verified Professionals',
      description: 'All hosts are verified professionals with reviews and ratings from real customers.'
    },
    {
      icon: Zap,
      title: 'Instant Booking',
      description: 'Book services instantly with secure payment processing and real-time availability.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join a community of photography enthusiasts and professional service providers.'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'We ensure high-quality services with our satisfaction guarantee and support system.'
    },
    {
      icon: Camera,
      title: 'Professional Results',
      description: 'Get stunning photos and videos from experienced photographers and drone operators.'
    }
  ]

  const stats = [
    { value: '500+', label: 'Professional Hosts', icon: Users },
    { value: '10K+', label: 'Completed Bookings', icon: CheckCircle },
    { value: '4.9', label: 'Average Rating', icon: Star },
    { value: '50+', label: 'Cities Covered', icon: MapPin },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Find Your Perfect
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Photography Partner
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Connect with professional photographers, drone operators, and studio owners. 
              From weddings to corporate events, we have the perfect match for your photography needs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button 
                onClick={handleBrowseServices} 
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="flex items-center gap-3">
                  Browse Services
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
              <Link 
                to="/auth" 
                className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm"
              >
                <span className="flex items-center gap-3">
                  Become a Host
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-3">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-3xl text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Why Choose PhotoDroneHire?
            </h2>
            <p className="text-xl leading-relaxed text-gray-600">
              We make finding and booking photography services simple and secure
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-200">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage


