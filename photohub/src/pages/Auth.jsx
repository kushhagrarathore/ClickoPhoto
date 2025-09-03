import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Camera, 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  CheckCircle,
  ArrowRight,
  AlertCircle
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

const Auth = () => {
  const navigate = useNavigate()
  const { signIn, signUp, isDummyMode } = useAuth()
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    role: 'customer',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('') // Clear error when user types
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      if (isSignUp) {
        const { user, error } = await signUp(formData)
        if (error) {
          setError(error)
        } else {
          setSuccess('Account created successfully! Redirecting...')
          setTimeout(() => {
            navigate('/dashboard')
          }, 2000)
        }
      } else {
        const { user, error } = await signIn({
          email: formData.email,
          password: formData.password,
        })
        if (error) {
          setError(error)
        } else {
          setSuccess('Signed in successfully! Redirecting...')
          setTimeout(() => {
            navigate('/dashboard')
          }, 2000)
        }
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const features = [
    'Connect with verified professionals',
    'Secure booking and payment system',
    'Real-time availability tracking',
    'Professional portfolio showcase',
    'Customer reviews and ratings',
    '24/7 customer support'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-purple-50">
      <div className="min-h-screen flex">
        {/* Left Side - Features */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-600 to-purple-700 text-white p-12">
          <div className="max-w-md mx-auto flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Camera className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">PhotoDroneHire</span>
              </div>

              <h1 className="text-4xl font-bold mb-6">
                {isSignUp ? 'Join Our Community' : 'Welcome Back'}
              </h1>
              
              <p className="text-xl text-blue-100 mb-8">
                {isSignUp 
                  ? 'Start your journey as a professional photographer or find the perfect service for your needs.'
                  : 'Sign in to access your dashboard and manage your bookings.'
                }
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-blue-100">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >
            <div className="card p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {isSignUp ? 'Create Account' : 'Sign In'}
                </h2>
                <p className="text-gray-600">
                  {isSignUp 
                    ? 'Join thousands of photographers and customers'
                    : 'Welcome back! Please sign in to your account'
                  }
                </p>
              </div>

              {/* Error/Success Messages */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-red-700">{error}</span>
                  </motion.div>
                )}

                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-green-700">{success}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                {isSignUp && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        I want to
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="role"
                            value="customer"
                            checked={formData.role === 'customer'}
                            onChange={handleInputChange}
                            className="mr-3"
                          />
                          <div>
                            <div className="font-medium">Book Services</div>
                            <div className="text-sm text-gray-500">I need photography</div>
                          </div>
                        </label>
                        <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="role"
                            value="host"
                            checked={formData.role === 'host'}
                            onChange={handleInputChange}
                            className="mr-3"
                          />
                          <div>
                            <div className="font-medium">Offer Services</div>
                            <div className="text-sm text-gray-500">I'm a photographer</div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Lock className="w-4 h-4 inline mr-2" />
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="input-field pr-10"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary py-3 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {isSignUp ? 'Creating Account...' : 'Signing In...'}
                    </div>
                  ) : (
                    <span className="flex items-center justify-center">
                      {isSignUp ? 'Create Account' : 'Sign In'}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </span>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                  <button
                    onClick={() => {
                      setIsSignUp(!isSignUp)
                      setError('')
                      setSuccess('')
                    }}
                    className="ml-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {isSignUp ? 'Sign In' : 'Sign Up'}
                  </button>
                </p>
              </div>

              {isDummyMode && (
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Demo Mode:</strong> Using dummy data. Sign in with any email/password.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Auth


