import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Calendar, Star, DollarSign, TrendingUp } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { useStore } from '@/contexts/StoreContext'
import DashboardSidebar from '@/components/ui/DashboardSidebar'

const HostDashboard = () => {
  const { profile } = useAuth()
  const { services, bookings } = useStore()

  const hostServices = services.filter(s => s.host_id === profile?.id)
  const hostBookings = bookings.filter(b => b.host_id === profile?.id)

  const stats = [
    {
      title: 'Active Services',
      value: hostServices.length,
      icon: Camera,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Bookings',
      value: hostBookings.length,
      icon: Calendar,
      color: 'bg-green-500',
    },
    {
      title: 'Average Rating',
      value: '4.8',
      icon: Star,
      color: 'bg-yellow-500',
    },
    {
      title: 'Total Earnings',
      value: '$2,450',
      icon: DollarSign,
      color: 'bg-purple-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <DashboardSidebar userRole="host" />
        
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Host Dashboard</h1>
              <p className="text-gray-600">Welcome back, {profile?.full_name}!</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Bookings */}
            <div className="card p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Bookings</h2>
              {hostBookings.length === 0 ? (
                <p className="text-gray-600">No bookings yet. Start by creating your first service!</p>
              ) : (
                <div className="space-y-4">
                  {hostBookings.slice(0, 5).map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Booking #{booking.id}</p>
                        <p className="text-sm text-gray-600">
                          {new Date(booking.start_date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">${booking.total_amount}</p>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                          booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full btn-primary">Add New Service</button>
                  <button className="w-full btn-outline">View All Bookings</button>
                  <button className="w-full btn-outline">Update Profile</button>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Response Rate</span>
                    <span className="font-medium">98%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Completion Rate</span>
                    <span className="font-medium">95%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Customer Satisfaction</span>
                    <span className="font-medium">4.8/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostDashboard


