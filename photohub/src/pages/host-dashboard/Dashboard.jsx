import React from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  DollarSign, 
  Star, 
  TrendingUp,
  Package,
  CheckCircle,
  XCircle,
  AlertCircle,
  Clock
} from 'lucide-react'
import { useStore } from '../../contexts/StoreContext'
import { useAuth } from '../../contexts/AuthContext'

const Dashboard = () => {
  const { bookings, services, reviews, refreshData } = useStore()
  const { user, profile } = useAuth()
  const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' })

  // Filter data for current host
  const hostBookings = bookings.filter(b => b.host_id === profile?.id)
  const hostServices = services.filter(s => s.host_id === profile?.id)
  const hostReviews = reviews.filter(r => r.host_id === profile?.id)

  // Calculate stats
  const totalBookings = hostBookings.length
  const totalRevenue = hostBookings.reduce((sum, b) => sum + (b.total_amount || 0), 0)
  const avgRating = hostReviews.length > 0 
    ? (hostReviews.reduce((sum, r) => sum + (r.rating || 0), 0) / hostReviews.length).toFixed(1)
    : 0
  const upcomingBookings = hostBookings.filter(b => 
    b.status === 'CONFIRMED' && new Date(b.start_date) > new Date()
  ).length

  // Recent bookings (last 5)
  const recentBookings = hostBookings
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 5)

  const getStatusColor = (status) => {
    switch (status) {
      case 'CONFIRMED': return 'text-green-600 bg-green-100'
      case 'PENDING': return 'text-yellow-600 bg-yellow-100'
      case 'COMPLETED': return 'text-blue-600 bg-blue-100'
      case 'CANCELLED': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'CONFIRMED': return <CheckCircle className="w-4 h-4" />
      case 'PENDING': return <Clock className="w-4 h-4" />
      case 'COMPLETED': return <CheckCircle className="w-4 h-4" />
      case 'CANCELLED': return <XCircle className="w-4 h-4" />
      default: return <AlertCircle className="w-4 h-4" />
    }
  }

  const statCards = [
    {
      title: 'Total Bookings',
      value: totalBookings,
      icon: Calendar,
      color: 'bg-blue-500',
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'Total Revenue',
      value: inr.format(totalRevenue),
      icon: DollarSign,
      color: 'bg-green-500',
      change: '+8%',
      changeType: 'positive'
    },
    {
      title: 'Average Rating',
      value: avgRating,
      icon: Star,
      color: 'bg-yellow-500',
      change: '+0.2',
      changeType: 'positive'
    },
    {
      title: 'Upcoming Bookings',
      value: upcomingBookings,
      icon: TrendingUp,
      color: 'bg-purple-500',
      change: '+3',
      changeType: 'positive'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your business.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={refreshData}
            className="btn-outline flex items-center gap-2"
          >
            <TrendingUp className="w-4 h-4" />
            Refresh Data
          </button>
          <button className="btn-outline">Export Report</button>
          <button className="btn-primary">Add Service</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-2">from last month</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Bookings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200"
      >
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Bookings</h2>
            <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
              View All
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentBookings.length > 0 ? (
                recentBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {booking.customer_name?.charAt(0) || 'C'}
                          </span>
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">
                            {booking.customer_name || 'Customer'}
                          </div>
                          <div className="text-sm text-gray-500">
                            {booking.customer_email || 'customer@example.com'}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {hostServices.find(s => s.id === booking.service_id)?.title || 'Service'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(booking.start_date).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-gray-500">
                        {booking.start_time} - {booking.end_time}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                        {getStatusIcon(booking.status)}
                        <span className="ml-1">{booking.status}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {inr.format(booking.total_amount || 0)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center">
                      <Calendar className="w-12 h-12 text-gray-300 mb-4" />
                      <p className="text-lg font-medium text-gray-900 mb-2">No bookings yet</p>
                      <p className="text-gray-500">When you receive bookings, they'll appear here.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Add New Service</h3>
          </div>
          <p className="text-gray-600 mb-4">Create a new service listing to attract more customers.</p>
          <button className="btn-primary w-full">Create Service</button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Manage Availability</h3>
          </div>
          <p className="text-gray-600 mb-4">Set your working hours and availability for bookings.</p>
          <button className="btn-outline w-full">Set Availability</button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">View Reviews</h3>
          </div>
          <p className="text-gray-600 mb-4">See what your customers are saying about your services.</p>
          <button className="btn-outline w-full">View All Reviews</button>
        </div>
      </motion.div>
    </div>
  )
}

export default Dashboard
