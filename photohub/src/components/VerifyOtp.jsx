import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useStore } from '@/contexts/StoreContext'

// Generic OTP verifier component that uses the production RPCs under the hood
// Props:
// - bookingId: string (uuid)
// - phase: 'start' | 'end'
const VerifyOtp = ({ bookingId, phase = 'start' }) => {
  const { verifyBookingOtp } = useStore()
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const fetchBookingStatus = async () => {
    if (!bookingId) return
    const { data, error } = await supabase
      .from('bookings')
      .select('status')
      .eq('id', bookingId)
      .single()
    if (error) {
      setStatus('Error')
    } else {
      setStatus(data?.status || 'Unknown')
    }
  }

  useEffect(() => {
    fetchBookingStatus()
  }, [bookingId])

  const handleVerifyOtp = async () => {
    setLoading(true)
    setMessage('')
    const res = await verifyBookingOtp(bookingId, otp, phase)
    if (res?.ok) {
      setMessage(
        phase === 'start'
          ? '✅ OTP verified! Booking is now ACTIVE.'
          : '✅ OTP verified! Booking is now COMPLETED.'
      )
      await fetchBookingStatus()
    } else {
      setMessage(`❌ ${res?.error || 'Invalid OTP. Please try again.'}`)
    }
    setLoading(false)
  }

  return (
    <div className="p-4 border rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-2">
        {phase === 'start' ? 'Start Service' : 'End Service'}
      </h2>

      <p className="mb-2">
        <strong>Current Status:</strong> {status}
      </p>

      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        className="w-full p-2 border rounded mb-3"
      />

      <button
        onClick={handleVerifyOtp}
        disabled={loading || !otp}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Verifying...' : 'Verify OTP'}
      </button>

      {message && <p className="mt-3 text-sm">{message}</p>}
    </div>
  )
}

export default VerifyOtp







