import React from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  CheckCircle, 
  Star, 
  DollarSign,
  TrendingUp,
  Users,
  Camera,
  Clock
} from 'lucide-react'

const StatsCard = ({ title, value, change, icon: Icon, color, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${color} group-hover:scale-110 transition-transform duration-200`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {change && (
          <div className={`flex items-center space-x-1 text-sm ${
            change > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
          }`}>
            <TrendingUp className={`w-4 h-4 ${change < 0 ? 'rotate-180' : ''}`} />
            <span>{Math.abs(change)}%</span>
          </div>
        )}
      </div>
      
      <div>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          {value}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {title}
        </p>
      </div>
    </motion.div>
  )
}

const SuggestionCard = ({ service, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ 
        y: -2,
        transition: { duration: 0.2 }
      }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-all duration-300 group cursor-pointer"
    >
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <Camera className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {service.title}
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
            {service.location}
          </p>
          <div className="flex items-center space-x-2 mt-1">
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {service.rating}
              </span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
            <span className="text-xs font-medium text-green-600 dark:text-green-400">
              ${service.price}/hr
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const DashboardStats = ({ userRole = 'customer' }) => {
  const customerStats = [
    {
      title: 'Total Bookings',
      value: '12',
      change: 15,
      icon: Calendar,
      color: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      title: 'Upcoming Bookings',
      value: '3',
      change: -5,
      icon: Clock,
      color: 'bg-gradient-to-r from-orange-500 to-orange-600'
    },
    {
      title: 'Completed Bookings',
      value: '9',
      change: 25,
      icon: CheckCircle,
      color: 'bg-gradient-to-r from-green-500 to-green-600'
    },
    {
      title: 'Reviews Given',
      value: '8',
      change: 10,
      icon: Star,
      color: 'bg-gradient-to-r from-yellow-500 to-yellow-600'
    }
  ]

  const hostStats = [
    {
      title: 'Total Services',
      value: '5',
      change: 20,
      icon: Camera,
      color: 'bg-gradient-to-r from-purple-500 to-purple-600'
    },
    {
      title: 'Active Bookings',
      value: '8',
      change: 12,
      icon: Calendar,
      color: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      title: 'Total Earnings',
      value: '$2,450',
      change: 18,
      icon: DollarSign,
      color: 'bg-gradient-to-r from-green-500 to-green-600'
    },
    {
      title: 'Average Rating',
      value: '4.9',
      change: 5,
      icon: Star,
      color: 'bg-gradient-to-r from-yellow-500 to-yellow-600'
    }
  ]

  const suggestions = [
    {
      title: 'Portrait Photography',
      location: 'Near you',
      rating: 4.9,
      price: 150
    },
    {
      title: 'Wedding Photography',
      location: 'Downtown',
      rating: 4.8,
      price: 300
    },
    {
      title: 'Event Photography',
      location: 'City Center',
      rating: 4.7,
      price: 200
    }
  ]

  const stats = userRole === 'host' ? hostStats : customerStats

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={stat.title}
            {...stat}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Personalized Suggestions */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Top Services Near You
          </h3>
          <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {suggestions.map((service, index) => (
            <SuggestionCard
              key={service.title}
              service={service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardStats



