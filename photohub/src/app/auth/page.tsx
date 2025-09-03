"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, EyeOff, Mail, Lock, User, Building2, Camera, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState<'user' | 'host'>('user')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    businessName: '',
    phone: '',
    serviceType: '',
  })

  // Get user type from URL query parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const type = urlParams.get('type')
    if (type === 'host' || type === 'user') {
      setUserType(type)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isLogin) {
      // Handle login
      console.log('Login:', { email: formData.email, password: formData.password })
    } else {
      // Handle signup
      console.log('Signup:', { ...formData, userType })
    }
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      businessName: '',
      phone: '',
      serviceType: '',
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900" asChild>
            <a href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </a>
          </Button>
        </motion.div>

        {/* User Type Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border">
            {userType === 'user' ? (
              <>
                <User className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Client Account</span>
              </>
            ) : (
              <>
                <Building2 className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Host Account</span>
              </>
            )}
          </div>
        </motion.div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </CardTitle>
              <p className="text-gray-600 mt-2">
                {isLogin 
                  ? 'Sign in to your PhotoHub account' 
                  : `Sign up as a ${userType === 'user' ? 'client' : 'host'}`
                }
              </p>
            </motion.div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    key="signup-fields"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4"
                  >
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          required={!isLogin}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          required={!isLogin}
                        />
                      </div>
                    </div>

                    {/* Host-specific fields */}
                    {userType === 'host' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                      >
                        <div>
                          <Label htmlFor="businessName">Business Name</Label>
                          <Input
                            id="businessName"
                            name="businessName"
                            type="text"
                            value={formData.businessName}
                            onChange={handleInputChange}
                            placeholder="Your Studio Name"
                            required={!isLogin}
                          />
                        </div>
                        <div>
                          <Label htmlFor="serviceType">Service Type</Label>
                          <select
                            id="serviceType"
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required={!isLogin}
                          >
                            <option value="">Select Service Type</option>
                            <option value="photography">Photography</option>
                            <option value="videography">Videography</option>
                            <option value="drone">Drone Services</option>
                            <option value="studio">Studio Space</option>
                            <option value="editing">Photo/Video Editing</option>
                          </select>
                        </div>
                      </motion.div>
                    )}

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        required={!isLogin}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Email Field */}
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field (Signup only) */}
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        className="pl-10"
                        required={!isLogin}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="pt-4"
              >
                <Button
                  type="submit"
                  variant="gradient"
                  className="w-full h-12 text-base font-medium"
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </Button>
              </motion.div>
            </form>

            {/* Toggle Mode */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-center"
            >
              <p className="text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={toggleMode}
                  className="ml-1 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </motion.div>

            {/* Forgot Password (Login only) */}
            {isLogin && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-center"
              >
                <a
                  href="/forgot-password"
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Forgot your password?
                </a>
              </motion.div>
            )}
          </CardContent>
        </Card>

        {/* Terms and Privacy */}
        {!isLogin && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center text-xs text-gray-500"
          >
            By creating an account, you agree to our{' '}
            <a href="/terms" className="text-blue-600 hover:text-blue-700">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-blue-600 hover:text-blue-700">
              Privacy Policy
            </a>
          </motion.div>
        )}
      </div>
    </div>
  )
}
