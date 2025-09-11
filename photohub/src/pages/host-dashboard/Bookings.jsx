import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Eye,
} from 'lucide-react'
import { useStore } from '@/contexts/StoreContext'
import { useAuth } from '@/contexts/AuthContext'

const Bookings = () => {
  const { bookings, verifyBookingOtp } = useStore()
  const [otpInputs, setOtpInputs] = useState({}) // bookingId -> code
  const { profile } = useAuth()
  const [activeTab, setActiveTab] = useState('pending')

  const hostBookings = bookings.filter(b => b.host_id === profile?.id)

  const tabs = [
    { id: 'pending', name: 'Pending', count: 0 },
    { id: 'upcoming', name: 'Upcoming', count: 0 },
    { id: 'past', name: 'Past', count: 0 }
  ]

  const upcomingBookings = hostBookings.filter(b => 
    (String(b.status).toUpperCase() === 'CONFIRMED') && new Date(b.start_date) > new Date()
  )
  const pendingBookings = hostBookings.filter(b => String(b.status).toUpperCase() === 'PENDING')
  const pastBookings = hostBookings.filter(b => 
    ['COMPLETED', 'CANCELLED'].includes(String(b.status).toUpperCase()) ||
    (String(b.status).toUpperCase() === 'CONFIRMED' && new Date(b.start_date) < new Date())
  )

  tabs[0].count = pendingBookings.length
  tabs[1].count = upcomingBookings.length
  tabs[2].count = pastBookings.length

  const getCurrentBookings = () => {
    switch (activeTab) {
      case 'upcoming': return upcomingBookings
      case 'pending': return pendingBookings
      case 'past': return pastBookings
      default: return []
    }
  }

  const getStatusColor = (status) => {
    const s = String(status).toUpperCase()
    switch (s) {
      case 'CONFIRMED': return 'text-green-600 bg-green-100'
      case 'PENDING': return 'text-yellow-600 bg-yellow-100'
      case 'COMPLETED': return 'text-blue-600 bg-blue-100'
      case 'CANCELLED': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status) => {
    const s = String(status).toUpperCase()
    switch (s) {
      case 'CONFIRMED': return <CheckCircle className="w-4 h-4" />
      case 'PENDING': return <AlertCircle className="w-4 h-4" />
      case 'COMPLETED': return <CheckCircle className="w-4 h-4" />
      case 'CANCELLED': return <XCircle className="w-4 h-4" />
      default: return <AlertCircle className="w-4 h-4" />
    }
  }

  const currentBookings = getCurrentBookings()
  const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bookings</h1>
          <p className="text-gray-600">New booking notifications will appear here.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
                <span className={`ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium ${
                  activeTab === tab.id
                    ? 'bg-primary-100 text-primary-600'
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {currentBookings.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start OTP</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3" />
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentBookings.map((b, index) => (
                    <motion.tr
                      key={b.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{b.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{b.service_type || 'Service'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{b.customer_name || 'Customer'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{b.customer_location || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(b.start_date).toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{b.end_time ? `${b.start_date} ${b.end_time}` : '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(b.status)}`}>
                          {getStatusIcon(b.status)}
                          <span className="ml-1">{String(b.status).toUpperCase()}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {String(b.status).toUpperCase() === 'CONFIRMED' ? (
                          <div className="flex items-center space-x-2">
                            <input
                              type="text"
                              placeholder="Enter start OTP"
                              value={otpInputs[b.id] || ''}
                              onChange={(e) => setOtpInputs(prev => ({ ...prev, [b.id]: e.target.value }))}
                              className="input-field w-36"
                            />
                            <button
                              onClick={async () => {
                                const code = otpInputs[b.id]
                                const res = await verifyBookingOtp(b.id, code, 'start')
                                if (res?.error || res?.ok === false) alert(res.error || 'Invalid OTP')
                                else alert('Service activated')
                              }}
                              className="btn-primary py-1 px-3 text-xs"
                            >
                              Start
                            </button>
                          </div>
                        ) : (
                          <span className="text-gray-500">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{inr.format(b.total_amount || 0)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm space-x-3">
                        <button className="text-primary-600 hover:text-primary-900"><Eye className="w-4 h-4" /></button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No {activeTab} bookings</h3>
              <p className="text-gray-500">Nothing to show yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Bookings

