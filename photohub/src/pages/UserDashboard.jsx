import React from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import DashboardSidebar from '@/components/ui/DashboardSidebar'
import ServiceListing from '@/pages/ServiceListing'

const UserDashboard = () => {
  const { profile } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <DashboardSidebar userRole="customer" />
        
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">User Dashboard</h1>
              <p className="text-gray-600">Welcome back, {profile?.full_name}!</p>
            </div>

            {/* Services Explorer (Search, Filters, Grid) */}
            <ServiceListing />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard 