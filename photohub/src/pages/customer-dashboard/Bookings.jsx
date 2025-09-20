import React, { useEffect, useMemo, useState } from 'react'
import DashboardSidebar from '@/components/ui/DashboardSidebar'
import { useStore } from '@/contexts/StoreContext'
import { useAuth } from '@/contexts/AuthContext'

const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' })

const CustomerBookings = () => {
  const { bookings, endServiceNow, extendService, refreshData } = useStore()
  const { profile } = useAuth()
  const myBookings = useMemo(() => (bookings || []).filter(b => b.user_id === profile?.id), [bookings, profile?.id])
  const [extend, setExtend] = useState({}) // bookingId -> { minutes, rate }


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <DashboardSidebar userRole="customer" />
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">My Bookings</h1>
              <button
                onClick={refreshData}
                className="btn-outline flex items-center gap-2"
              >
                🔄 Refresh Data
              </button>
            </div>
            
            <div className="card p-6">
              {myBookings.length === 0 ? (
                <p className="text-gray-600">You have not made any bookings yet.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount Paid</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {myBookings.map((b) => (
                        <tr key={b.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{b.service_type || 'Service'}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(b.start_date).toLocaleString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{b.end_time ? `${b.start_date} ${b.end_time}` : '-'}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{inr.format(b.total_amount || 0)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {String(b.status).toUpperCase() === 'CONFIRMED' && (
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={async () => {
                                    if (confirm('⚠️ You are ending early. Remaining time will be lost. Continue?')) {
                                      const res = await endServiceNow(b.id)
                                      if (res?.error) alert(res.error)
                                      else alert('Service ended')
                                    }
                                  }}
                                  className="btn-outline py-1 px-3 text-xs"
                                >
                                  End Now
                                </button>
                                <input
                                  type="number"
                                  min="1"
                                  placeholder="+Minutes"
                                  value={extend[b.id]?.minutes || ''}
                                  onChange={(e) => setExtend(prev => ({ ...prev, [b.id]: { ...(prev[b.id]||{}), minutes: Number(e.target.value)||0 } }))}
                                  className="input-field w-24"
                                />
                                <input
                                  type="number"
                                  min="0"
                                  placeholder="Rate/min"
                                  value={extend[b.id]?.rate || ''}
                                  onChange={(e) => setExtend(prev => ({ ...prev, [b.id]: { ...(prev[b.id]||{}), rate: Number(e.target.value)||0 } }))}
                                  className="input-field w-24"
                                />
                                <button
                                  onClick={async () => {
                                    const minutes = extend[b.id]?.minutes || 0
                                    const rate = extend[b.id]?.rate || 0
                                    if (minutes > 0) {
                                      const res = await extendService(b.id, minutes, rate)
                                      if (res?.error) alert(res.error)
                                      else alert('Service extended')
                                    }
                                  }}
                                  className="btn-primary py-1 px-3 text-xs"
                                >
                                  Extend
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerBookings






