import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { useAuth } from '@/contexts/AuthContext'
import { Loader2, User, Mail, Phone, MapPin, Camera, Edit3, Save, X, Upload, Star, Calendar, Award } from 'lucide-react'

const CustomerProfile = () => {
  const { profile, updateProfile, updateEmail, loading } = useAuth()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [bio, setBio] = useState('')
  const [website, setWebsite] = useState('')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [profileImage, setProfileImage] = useState(null)

  useEffect(() => {
    if (profile) {
      setFullName(profile.full_name || '')
      setEmail(profile.email || '')
      setPhone(profile.phone || '')
      setLocation(profile.location || '')
      setBio(profile.bio || '')
      setWebsite(profile.website || '')
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
        bio,
        website,
      })
      if (profileErr) throw new Error(profileErr)

      // Update email if changed
      if (email && email !== profile?.email) {
        const { error: emailErr } = await updateEmail(email)
        if (emailErr) throw new Error(emailErr)
      }

      setMessage('Profile updated successfully')
      setIsEditing(false)
    } catch (err) {
      setError(err.message || 'Failed to update profile')
    } finally {
      setSaving(false)
    }
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setProfileImage(file)
    }
  }

  const cancelEdit = () => {
    if (profile) {
      setFullName(profile.full_name || '')
      setEmail(profile.email || '')
      setPhone(profile.phone || '')
      setLocation(profile.location || '')
      setBio(profile.bio || '')
      setWebsite(profile.website || '')
    }
    setIsEditing(false)
    setError('')
    setMessage('')
  }

  if (loading) {
    return (
      <DashboardLayout userRole="customer">
        <div className="p-8">
          <div className="flex items-center justify-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
          </div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout userRole="customer">
      <div className="p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
              <p className="text-gray-600 mt-2">Manage your personal information and preferences</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Overview */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        {profile?.full_name?.charAt(0) || 'U'}
                      </div>
                      {isEditing && (
                        <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-gray-50">
                          <Camera className="w-4 h-4 text-gray-600" />
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{profile?.full_name || 'User'}</h3>
                    <p className="text-gray-600 text-sm">{profile?.email}</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {profile?.location || 'Location not set'}
                      </div>
                      <div className="flex items-center justify-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        Member since {new Date(profile?.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Bookings</span>
                      <span className="font-semibold text-gray-900">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Reviews Given</span>
                      <span className="font-semibold text-gray-900">8</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Favorite Services</span>
                      <span className="font-semibold text-gray-900">5</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Profile Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                    {!isEditing ? (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="flex items-center space-x-2 px-4 py-2 text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        <Edit3 className="w-4 h-4" />
                        <span>Edit Profile</span>
                      </button>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={cancelEdit}
                          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-700 transition-colors"
                        >
                          <X className="w-4 h-4" />
                          <span>Cancel</span>
                        </button>
                      </div>
                    )}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your full name"
                          disabled={!isEditing}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          disabled={!isEditing}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Phone className="w-4 h-4 inline mr-2" />
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 555 000 0000"
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <MapPin className="w-4 h-4 inline mr-2" />
                          Location
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="City, Country"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bio
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Tell us about yourself..."
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="https://yourwebsite.com"
                        disabled={!isEditing}
                      />
                    </div>

                    {message && (
                      <div className="p-4 rounded-lg bg-green-50 text-green-700 text-sm border border-green-200">
                        {message}
                      </div>
                    )}
                    {error && (
                      <div className="p-4 rounded-lg bg-red-50 text-red-700 text-sm border border-red-200">
                        {error}
                      </div>
                    )}

                    {isEditing && (
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
                          disabled={saving}
                        >
                          {saving ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Save className="w-4 h-4" />
                          )}
                          <span>{saving ? 'Saving...' : 'Save Changes'}</span>
                        </button>
                      </div>
                    )}
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
    </DashboardLayout>
  )
}

export default CustomerProfile



