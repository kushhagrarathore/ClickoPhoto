import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  Download,
  Eye
} from 'lucide-react'
import { useStore } from '@/contexts/StoreContext'
import { useAuth } from '@/contexts/AuthContext'

const Earnings = () => {
  const { bookings } = useStore()
  const { user, profile } = useAuth()
  const [selectedPeriod, setSelectedPeriod] = useState('month')

  // Filter bookings for current host
  const hostBookings = bookings.filter(b => b.host_id === profile?.id)

  // Calculate earnings for different periods
  const now = new Date()
  const thisWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)

  const getEarningsForPeriod = (startDate) => {
    return hostBookings
      .filter(b => new Date(b.created_at) >= startDate && b.status === 'COMPLETED')
      .reduce((sum, b) => sum + (b.total_amount || 0), 0)
  }

  const weeklyEarnings = getEarningsForPeriod(thisWeek)
  const monthlyEarnings = getEarningsForPeriod(thisMonth)
  const lastMonthEarnings = getEarningsForPeriod(lastMonth)
  const totalEarnings = hostBookings
    .filter(b => b.status === 'COMPLETED')
    .reduce((sum, b) => sum + (b.total_amount || 0), 0)

  // Mock payout history data
  const payoutHistory = [
    {
      id: 1,
      date: '2024-01-15',
      amount: 1250.00,
      status: 'PAID',
      reference: 'PAY-001'
    },
    {
      id: 2,
      date: '2024-01-08',
      amount: 890.00,
      status: 'PAID',
      reference: 'PAY-002'
    },
    {
      id: 3,
      date: '2024-01-01',
      amount: 2100.00,
      status: 'PAID',
      reference: 'PAY-003'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'PAID': return 'text-green-600 bg-green-100'
      case 'PENDING': return 'text-yellow-600 bg-yellow-100'
      case 'FAILED': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' })

  const earningsCards = [
    {
      title: 'This Week',
      amount: weeklyEarnings,
      change: '+12%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'bg-blue-500'
    },
    {
      title: 'This Month',
      amount: monthlyEarnings,
      change: monthlyEarnings > lastMonthEarnings ? '+' : '',
      changeType: monthlyEarnings > lastMonthEarnings ? 'positive' : 'negative',
      icon: monthlyEarnings > lastMonthEarnings ? TrendingUp : TrendingDown,
      color: monthlyEarnings > lastMonthEarnings ? 'bg-green-500' : 'bg-red-500'
    },
    {
      title: 'Total Earnings',
      amount: totalEarnings,
      change: '+8%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'bg-purple-500'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Earnings</h1>
          <p className="text-gray-600">Track your revenue and manage payouts.</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="input-field"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <button className="btn-outline flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Earnings Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {earningsCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{card.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {inr.format(card.amount)}
                </p>
              </div>
              <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className={`text-sm font-medium ${
                card.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {card.change}
              </span>
              <span className="text-sm text-gray-500 ml-2">from last period</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Revenue Chart Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Revenue Over Time</h2>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">7D</button>
            <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">30D</button>
            <button className="px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded-lg">90D</button>
          </div>
        </div>
        
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-primary-600" />
            </div>
            <p className="text-gray-500">Chart component will be implemented here</p>
            <p className="text-sm text-gray-400">Revenue visualization over selected period</p>
          </div>
        </div>
      </motion.div>

      {/* Payout History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200"
      >
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Payout History</h2>
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
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reference
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {payoutHistory.map((payout, index) => (
                <motion.tr
                  key={payout.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(payout.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {payout.reference}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {inr.format(payout.amount)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(payout.status)}`}>
                      {payout.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-primary-600 hover:text-primary-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-900">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Request Payout</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Withdraw your earnings to your connected bank account or PayPal.
          </p>
          <button className="btn-primary w-full">Request Payout</button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Payment Schedule</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Set up automatic payouts on a weekly or monthly schedule.
          </p>
          <button className="btn-outline w-full">Configure Schedule</button>
        </div>
      </motion.div>
    </div>
  )
}

export default Earnings

