import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { useAuth } from '@/contexts/AuthContext'
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Eye, 
  EyeOff, 
  Save, 
  Loader2, 
  Check, 
  X,
  Mail,
  Smartphone,
  Globe,
  Lock,
  User,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  CreditCard,
  Trash2,
  AlertTriangle
} from 'lucide-react'

const CustomerSettings = () => {
  const { profile, updateProfile, loading } = useAuth()
  const [activeTab, setActiveTab] = useState('account')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  // Account Settings
  const [accountSettings, setAccountSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: true,
    bookingReminders: true,
    reviewReminders: true,
    priceAlerts: false
  })

  // Privacy Settings
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    showLocation: true,
    allowMessages: true,
    dataSharing: false
  })

  // Security Settings
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    loginAlerts: true,
    sessionTimeout: 30
  })

  // Appearance Settings
  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: 'light',
    language: 'en',
    timezone: 'UTC',
    dateFormat: 'MM/DD/YYYY'
  })

  // Notification Settings
  const [notificationSettings, setNotificationSettings] = useState({
    sound: true,
    desktop: true,
    mobile: true,
    email: true
  })

  const tabs = [
    { id: 'account', name: 'Account', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'privacy', name: 'Privacy', icon: Shield },
    { id: 'security', name: 'Security', icon: Lock },
    { id: 'appearance', name: 'Appearance', icon: Sun },
    { id: 'billing', name: 'Billing', icon: CreditCard }
  ]

  const handleSave = async (settingsType, settings) => {
    setSaving(true)
    setMessage('')
    setError('')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Update profile with settings
      const { error: profileErr } = await updateProfile({
        settings: {
          ...profile?.settings,
          [settingsType]: settings
        }
      })
      
      if (profileErr) throw new Error(profileErr)
      
      setMessage('Settings saved successfully')
    } catch (err) {
      setError(err.message || 'Failed to save settings')
    } finally {
      setSaving(false)
    }
  }

  const handleAccountSettingsChange = (key, value) => {
    setAccountSettings(prev => ({ ...prev, [key]: value }))
  }

  const handlePrivacySettingsChange = (key, value) => {
    setPrivacySettings(prev => ({ ...prev, [key]: value }))
  }

  const handleSecuritySettingsChange = (key, value) => {
    setSecuritySettings(prev => ({ ...prev, [key]: value }))
  }

  const handleAppearanceSettingsChange = (key, value) => {
    setAppearanceSettings(prev => ({ ...prev, [key]: value }))
  }

  const handleNotificationSettingsChange = (key, value) => {
    setNotificationSettings(prev => ({ ...prev, [key]: value }))
  }

  const renderAccountSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={profile?.full_name || ''}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={profile?.email || ''}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Actions</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-900">Change Email Address</span>
              </div>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <Lock className="w-5 h-5 text-gray-400" />
                <span className="text-gray-900">Change Password</span>
              </div>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 border border-red-200 rounded-lg hover:bg-red-50 transition-colors text-red-600">
              <div className="flex items-center space-x-3">
                <Trash2 className="w-5 h-5" />
                <span>Delete Account</span>
              </div>
              <span className="text-red-400">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Notifications</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-4">
            {Object.entries(accountSettings).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <span className="text-gray-900 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  </span>
                  <p className="text-sm text-gray-500">
                    {key === 'emailNotifications' && 'Receive notifications via email'}
                    {key === 'smsNotifications' && 'Receive notifications via SMS'}
                    {key === 'marketingEmails' && 'Receive marketing and promotional emails'}
                    {key === 'bookingReminders' && 'Get reminded about upcoming bookings'}
                    {key === 'reviewReminders' && 'Get reminded to leave reviews'}
                    {key === 'priceAlerts' && 'Get notified about price changes'}
                  </p>
                </div>
                <button
                  onClick={() => handleAccountSettingsChange(key, !value)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    value ? 'bg-primary-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      value ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-4">
            {Object.entries(notificationSettings).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <span className="text-gray-900 capitalize">
                    {key === 'sound' && 'Sound Notifications'}
                    {key === 'desktop' && 'Desktop Notifications'}
                    {key === 'mobile' && 'Mobile Notifications'}
                    {key === 'email' && 'Email Notifications'}
                  </span>
                </div>
                <button
                  onClick={() => handleNotificationSettingsChange(key, !value)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    value ? 'bg-primary-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      value ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Visibility</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Who can see your profile?</label>
              <select
                value={privacySettings.profileVisibility}
                onChange={(e) => handlePrivacySettingsChange('profileVisibility', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="public">Everyone</option>
                <option value="registered">Registered users only</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-4">
            {Object.entries(privacySettings).filter(([key]) => key !== 'profileVisibility').map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <span className="text-gray-900 capitalize">
                    {key === 'showEmail' && 'Show Email Address'}
                    {key === 'showPhone' && 'Show Phone Number'}
                    {key === 'showLocation' && 'Show Location'}
                    {key === 'allowMessages' && 'Allow Messages from Others'}
                    {key === 'dataSharing' && 'Allow Data Sharing with Partners'}
                  </span>
                </div>
                <button
                  onClick={() => handlePrivacySettingsChange(key, !value)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    value ? 'bg-primary-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      value ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Features</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-4">
            {Object.entries(securitySettings).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <span className="text-gray-900 capitalize">
                    {key === 'twoFactorAuth' && 'Two-Factor Authentication'}
                    {key === 'loginAlerts' && 'Login Alerts'}
                    {key === 'sessionTimeout' && 'Session Timeout'}
                  </span>
                  <p className="text-sm text-gray-500">
                    {key === 'twoFactorAuth' && 'Add an extra layer of security to your account'}
                    {key === 'loginAlerts' && 'Get notified when someone logs into your account'}
                    {key === 'sessionTimeout' && 'Automatically log out after inactivity'}
                  </p>
                </div>
                {key === 'sessionTimeout' ? (
                  <select
                    value={value}
                    onChange={(e) => handleSecuritySettingsChange(key, e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value={15}>15 minutes</option>
                    <option value={30}>30 minutes</option>
                    <option value={60}>1 hour</option>
                    <option value={120}>2 hours</option>
                  </select>
                ) : (
                  <button
                    onClick={() => handleSecuritySettingsChange(key, !value)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      value ? 'bg-primary-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        value ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Theme & Display</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleAppearanceSettingsChange('theme', 'light')}
                  className={`flex items-center space-x-2 px-4 py-3 border rounded-lg transition-colors ${
                    appearanceSettings.theme === 'light' 
                      ? 'border-primary-500 bg-primary-50 text-primary-700' 
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Sun className="w-5 h-5" />
                  <span>Light</span>
                </button>
                <button
                  onClick={() => handleAppearanceSettingsChange('theme', 'dark')}
                  className={`flex items-center space-x-2 px-4 py-3 border rounded-lg transition-colors ${
                    appearanceSettings.theme === 'dark' 
                      ? 'border-primary-500 bg-primary-50 text-primary-700' 
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Moon className="w-5 h-5" />
                  <span>Dark</span>
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <select
                value={appearanceSettings.language}
                onChange={(e) => handleAppearanceSettingsChange('language', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
              <select
                value={appearanceSettings.timezone}
                onChange={(e) => handleAppearanceSettingsChange('timezone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="UTC">UTC</option>
                <option value="EST">Eastern Time</option>
                <option value="PST">Pacific Time</option>
                <option value="CST">Central Time</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderBillingSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <CreditCard className="w-5 h-5 text-gray-400" />
                <div>
                  <span className="text-gray-900">Visa ending in 4242</span>
                  <p className="text-sm text-gray-500">Expires 12/25</p>
                </div>
              </div>
              <button className="text-primary-600 hover:text-primary-700">Edit</button>
            </div>
            <button className="w-full flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
              <CreditCard className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600">Add Payment Method</span>
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing History</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-center py-8">
            <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No billing history available</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'account':
        return renderAccountSettings()
      case 'notifications':
        return renderNotificationSettings()
      case 'privacy':
        return renderPrivacySettings()
      case 'security':
        return renderSecuritySettings()
      case 'appearance':
        return renderAppearanceSettings()
      case 'billing':
        return renderBillingSettings()
      default:
        return renderAccountSettings()
    }
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
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
              <p className="text-gray-600 mt-2">Manage your account settings and preferences</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Settings Navigation */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                  <nav className="space-y-2">
                    {tabs.map((tab) => {
                      const Icon = tab.icon
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                            activeTab === tab.id
                              ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span>{tab.name}</span>
                        </button>
                      )
                    })}
                  </nav>
                </motion.div>
              </div>

              {/* Settings Content */}
              <div className="lg:col-span-3">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderActiveTab()}
                </motion.div>

                {/* Save Button */}
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => handleSave(activeTab, {
                      ...accountSettings,
                      ...privacySettings,
                      ...securitySettings,
                      ...appearanceSettings,
                      ...notificationSettings
                    })}
                    disabled={saving}
                    className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
                  >
                    {saving ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4" />
                    )}
                    <span>{saving ? 'Saving...' : 'Save Changes'}</span>
                  </button>
                </div>

                {/* Messages */}
                {message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 rounded-lg bg-green-50 text-green-700 text-sm border border-green-200 flex items-center space-x-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>{message}</span>
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 rounded-lg bg-red-50 text-red-700 text-sm border border-red-200 flex items-center space-x-2"
                  >
                    <AlertTriangle className="w-4 h-4" />
                    <span>{error}</span>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
    </DashboardLayout>
  )
}

export default CustomerSettings






