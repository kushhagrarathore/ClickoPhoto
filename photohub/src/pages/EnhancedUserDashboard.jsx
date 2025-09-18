import React from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import DashboardLayout from '@/components/layout/DashboardLayout'
import DashboardStats from '@/components/ui/DashboardStats'
import { WelcomeSectionSkeleton } from '@/components/ui/SkeletonLoader'
import { 
  Calendar, 
  Star, 
  Camera, 
  TrendingUp,
  ArrowRight,
  Plus,
  Clock,
  CheckCircle
} from 'lucide-react'

const EnhancedUserDashboard = () => {
  const { profile, loading } = useAuth()

  const recentBookings = [
    {
      id: 1,
      title: 'Portrait Photography Session',
      photographer: 'Sarah Johnson',
      date: '2024-01-15',
      time: '2:00 PM',
      status: 'upcoming',
      price: 150
    },
    {
      id: 2,
      title: 'Wedding Photography',
      photographer: 'Mike Chen',
      date: '2024-01-10',
      time: '10:00 AM',
      status: 'completed',
      price: 2500
    },
    {
      id: 3,
      title: 'Event Photography',
      photographer: 'Emily Davis',
      date: '2024-01-05',
      time: '6:00 PM',
      status: 'completed',
      price: 300
    }
  ]

  const quickActions = [
    {
      title: 'Book New Service',
      description: 'Find and book photography services',
      icon: Plus,
      color: 'from-purple-500 to-blue-500',
      href: '/services'
    },
    {
      title: 'View My Bookings',
      description: 'Manage your upcoming bookings',
      icon: Calendar,
      color: 'from-green-500 to-teal-500',
      href: '/customer/bookings'
    },
    {
      title: 'Leave Review',
      description: 'Share your experience',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      href: '/customer/reviews'
    },
    {
      title: 'Browse Services',
      description: 'Discover new photographers',
      icon: Camera,
      color: 'from-pink-500 to-red-500',
      href: '/services'
    }
  ]

  if (loading) {
    return (
      <DashboardLayout userRole="customer">
        <div className="p-8">
          <WelcomeSectionSkeleton />
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout userRole="customer">
      <div className="p-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 mb-8 overflow-hidden"
        >
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome back, {profile?.full_name || 'User'}! 👋
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Ready to capture your next moment? Let's find the perfect photographer for you.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Browse Services
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </motion.button>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-blue-200/30 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200/30 to-purple-200/30 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full translate-y-12 -translate-x-12" />
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <DashboardStats userRole="customer" />
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.a
                key={action.title}
                href={action.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {action.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {action.description}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Recent Bookings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Recent Bookings
            </h3>
            <a
              href="/customer/bookings"
              className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium flex items-center"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {recentBookings.map((booking, index) => (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        booking.status === 'upcoming' 
                          ? 'bg-gradient-to-r from-orange-500 to-yellow-500' 
                          : 'bg-gradient-to-r from-green-500 to-teal-500'
                      }`}>
                        {booking.status === 'upcoming' ? (
                          <Clock className="w-6 h-6 text-white" />
                        ) : (
                          <CheckCircle className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {booking.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          by {booking.photographer}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          {new Date(booking.date).toLocaleDateString()} at {booking.time}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        ${booking.price}
                      </p>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        booking.status === 'upcoming'
                          ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
                          : 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      }`}>
                        {booking.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tips & Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8"
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Pro Tip: Book Early for Best Results
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Popular photographers get booked quickly, especially during peak seasons. 
                Book your session at least 2-3 weeks in advance to secure your preferred date and time.
              </p>
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm">
                Learn more photography tips →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}

export default EnhancedUserDashboard



