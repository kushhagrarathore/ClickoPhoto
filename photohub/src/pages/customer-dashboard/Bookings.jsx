import React, { useEffect, useMemo, useState } from 'react'
import DashboardSidebar from '@/components/ui/DashboardSidebar'
import { useStore } from '@/contexts/StoreContext'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabaseClient'

const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' })

const CustomerBookings = () => {
  const { bookings, verifyBookingOtp } = useStore()
  const { profile } = useAuth()
  const myBookings = useMemo(() => (bookings || []).filter(b => b.user_id === profile?.id), [bookings, profile?.id])
  const [otpMap, setOtpMap] = useState({}) // bookingId -> received OTP

  useEffect(() => {
    // subscribe to per-booking channel to receive OTP broadcasts
    const channels = myBookings.map((b) => {
      const ch = supabase.channel(`booking:${b.id}`)
      ch.on('broadcast', { event: 'otp_issued' }, (payload) => {
        const code = payload?.payload?.code
        if (code) setOtpMap(prev => ({ ...prev, [b.id]: code }))
      })
      ch.on('broadcast', { event: 'otp_verified' }, () => {
        setOtpMap(prev => { const { [b.id]: _, ...rest } = prev; return rest })
      })
      ch.subscribe()
      return ch
    })
    return () => { channels.forEach(ch => ch.unsubscribe()) }
  }, [myBookings])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <DashboardSidebar userRole="customer" />
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">My Bookings</h1>
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
                                <input
                                  type="text"
                                  placeholder="Enter OTP"
                                  value={otpMap[b.id] || ''}
                                  onChange={(e) => setOtpMap(prev => ({ ...prev, [b.id]: e.target.value }))}
                                  className="input-field w-32"
                                />
                                <button
                                  onClick={async () => {
                                    const code = otpMap[b.id]
                                    const res = await verifyBookingOtp(b.id, code)
                                    if (!res.ok) alert(res.error)
                                  }}
                                  className="btn-primary py-1 px-3"
                                >
                                  Complete
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






