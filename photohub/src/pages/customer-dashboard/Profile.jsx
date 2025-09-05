import React, { useEffect, useState } from 'react'
import DashboardSidebar from '@/components/ui/DashboardSidebar'
import { useAuth } from '@/contexts/AuthContext'
import { Loader2 } from 'lucide-react'

const CustomerProfile = () => {
  const { profile, updateProfile, updateEmail, loading } = useAuth()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (profile) {
      setFullName(profile.full_name || '')
      setEmail(profile.email || '')
      setPhone(profile.phone || '')
      setLocation(profile.location || '')
    }
  }, [profile])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setMessage('')
    setError('')
    try {
      // Update profile fields
      const { error: profileErr } = await updateProfile({
        full_name: fullName,
        phone,
        location,
      })
      if (profileErr) throw new Error(profileErr)

      // Update email if changed
      if (email && email !== profile?.email) {
        const { error: emailErr } = await updateEmail(email)
        if (emailErr) throw new Error(emailErr)
      }

      setMessage('Profile updated successfully')
    } catch (err) {
      setError(err.message || 'Failed to update profile')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <DashboardSidebar userRole="customer" />
        <div className="flex-1 p-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile</h1>
            <div className="card p-6">
              {!profile || loading ? (
                <div className="flex items-center space-x-3 text-gray-600">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Loading profile...</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        className="input"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        className="input"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 555 000 0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input
                        type="text"
                        className="input"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="City, Country"
                      />
                    </div>
                  </div>

                  {message && (
                    <div className="p-3 rounded-md bg-green-50 text-green-700 text-sm">{message}</div>
                  )}
                  {error && (
                    <div className="p-3 rounded-md bg-red-50 text-red-700 text-sm">{error}</div>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="btn-primary inline-flex items-center"
                      disabled={saving}
                    >
                      {saving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                      Save Changes
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerProfile



