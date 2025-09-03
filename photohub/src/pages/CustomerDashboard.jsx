import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Star, DollarSign, Camera } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { useStore } from '@/contexts/StoreContext'
import DashboardSidebar from '@/components/ui/DashboardSidebar'

const CustomerDashboard = () => {
  const { profile } = useAuth()
  const { bookings, services } = useStore()

  const customerBookings = bookings.filter(b => b.customer_id === profile?.id)

  const stats = [
    {
      title: 'Total Bookings',
      value: customerBookings.length,
      icon: Calendar,
      color: 'bg-blue-500',
    },
    {
      title: 'Completed',
      value: customerBookings.filter(b => b.status === 'completed').length,
      icon: Camera,
      color: 'bg-green-500',
    },
    {
      title: 'Total Spent',
      value: `$${customerBookings.reduce((sum, b) => sum + b.total_amount, 0)}`,
      icon: DollarSign,
      color: 'bg-purple-500',
    },
    {
      title: 'Reviews Given',
      value: '3',
      icon: Star,
      color: 'bg-yellow-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <DashboardSidebar userRole="customer" />
        
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Customer Dashboard</h1>
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
              {customerBookings.length === 0 ? (
                <p className="text-gray-600">No bookings yet. Start by browsing our services!</p>
              ) : (
                <div className="space-y-4">
                  {customerBookings.slice(0, 5).map((booking) => (
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
                  <button className="w-full btn-primary">Browse Services</button>
                  <button className="w-full btn-outline">View All Bookings</button>
                  <button className="w-full btn-outline">Update Profile</button>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Services</h3>
                <div className="space-y-3">
                  {services.slice(0, 3).map((service) => (
                    <div key={service.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Camera className="w-5 h-5 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{service.title}</p>
                        <p className="text-sm text-gray-600">${service.hourly_rate}/hr</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerDashboard


