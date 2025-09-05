import React from 'react'
import DashboardSidebar from '@/components/ui/DashboardSidebar'

const CustomerReviews = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <DashboardSidebar userRole="customer" />
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">My Reviews</h1>
            <div className="card p-6">
              <p className="text-gray-600">Your reviews will appear here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerReviews






