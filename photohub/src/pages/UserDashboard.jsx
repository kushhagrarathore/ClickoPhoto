import React from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import DashboardLayout from '@/components/layout/DashboardLayout'
import ServiceListing from '@/pages/ServiceListing'

const UserDashboard = () => {
  const { profile } = useAuth()

  return (
    <DashboardLayout userRole="customer">
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">User Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">Welcome back, {profile?.full_name}!</p>
          </motion.div>

          {/* Services Explorer (Search, Filters, Grid) */}
          <ServiceListing />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default UserDashboard 