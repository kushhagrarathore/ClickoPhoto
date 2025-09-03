import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Camera, 
  Building2, 
  Package, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Users,
  Award,
  Zap,
  Search,
  MapPin
} from 'lucide-react'
import { useStore } from '@/contexts/StoreContext'
import { useAuth } from '@/contexts/AuthContext'

const LandingPage = () => {
  const { categories, services } = useStore()
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
      icon: Building2,
      title: 'Studio Rentals',
      description: 'Access professional studio spaces and equipment for your photography needs.'
    }
  ]

  const stats = [
    { value: '500+', label: 'Professional Hosts', icon: Users },
    { value: '10K+', label: 'Completed Bookings', icon: CheckCircle },
    { value: '4.9', label: 'Average Rating', icon: Star },
    { value: '50+', label: 'Cities Covered', icon: MapPin },
  ]

  const popularServices = services.slice(0, 6)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-purple-600 to-primary-800 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Find Your Perfect
              <span className="block text-gradient">Photography Partner</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Connect with professional photographers, drone operators, and studio owners. 
              From weddings to corporate events, we have the perfect match for your photography needs.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for photography services..."
                  className="w-full px-6 py-4 text-gray-900 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button className="absolute right-2 top-2 btn-primary px-6 py-2">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button onClick={handleBrowseServices} className="btn-primary text-lg px-8 py-3">
                <span className="flex items-center gap-2">
                  Browse Services
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
              <Link to="/auth" className="btn-outline text-lg px-8 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <span className="flex items-center gap-2">
                  Become a Host
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose PhotoDroneHire?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We make finding and booking photography services simple and secure
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card text-center p-8 h-full">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore Our Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Browse our categories to find exactly what you need
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={`/services?category=${category.id}`}
                  className="card group p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <div className="flex items-center justify-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm">Explore</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Popular Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Discover our most booked photography and drone services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card overflow-hidden group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.images?.[0] || 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400'}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary-600">${service.hourly_rate}/hr</span>
                      <Link 
                        to={`/booking/${service.id}`}
                        className="btn-primary text-sm"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/services" className="btn-primary text-lg px-8 py-3">
              <span className="flex items-center gap-2">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-purple-600 px-8 py-16 sm:px-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-lg leading-8 text-blue-100">
                Join thousands of satisfied customers who found their perfect photographer
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                <button onClick={handleBrowseServices} className="btn-secondary text-lg px-8 py-3">
                  <span className="flex items-center gap-2">
                    Browse Services
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
                <Link to="/auth" className="btn-outline text-lg px-8 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <span className="flex items-center gap-2">
                    Sign Up Free
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage


