import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Camera, 
  Menu, 
  X, 
  User, 
  LogOut, 
  Settings, 
  Home,
  Search,
  Bell
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

const Navbar = () => {
  const { user, profile, signOut } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [signingOut, setSigningOut] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSignOut = async () => {
    if (signingOut) return
    setSigningOut(true)
    console.log('Sign out button clicked')
    try {
      // Optimistically close UI and clear local session
      setIsDropdownOpen(false)
      try {
        localStorage.removeItem('supabase_session')
        const keysToRemove = []
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i)
          if (key && key.startsWith('sb-') && key.includes('auth')) {
            keysToRemove.push(key)
          }
        }
        keysToRemove.forEach((k) => localStorage.removeItem(k))
      } catch {}

      // Call backend sign out with timeout fallback
      const signOutPromise = signOut()
      const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 2000))
      await Promise.race([signOutPromise, timeoutPromise])
      console.log('Sign out result: attempted')

      // Navigate to auth and hard reload to ensure clean state
      navigate('/auth', { replace: true })
      setTimeout(() => {
        if (window?.location?.pathname !== '/auth') {
          window.location.href = '/auth'
        }
      }, 200)
    } catch (err) {
      console.error('Sign out error:', err)
      navigate('/auth', { replace: true })
    } finally {
      setSigningOut(false)
    }
  }

  const navItems = [
    { name: 'Home', path: '/' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-lg' : 'backdrop-blur-md bg-white/40 shadow-sm'} border-b border-white/20` }>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all ${scrolled ? 'h-14' : 'h-16'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`rounded-lg flex items-center justify-center bg-gradient-to-r from-purple-600 to-sky-500 text-white transition-all ${scrolled ? 'w-7 h-7' : 'w-8 h-8'}`}>
              <Camera className={`${scrolled ? 'w-4 h-4' : 'w-5 h-5'}`} />
            </div>
            <span className={`font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-sky-500 transition-all ${scrolled ? 'text-lg' : 'text-xl'}`}>PhotoDroneHire</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className="relative text-sm font-medium text-gray-800 hover:text-gray-900">
                <span>{item.name}</span>
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-600 to-sky-500 transition-all ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>

          {/* Right side - Auth/User */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {/* Notifications */}
                <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                  <Bell className="w-5 h-5" />
                </button>

                {/* User Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="hidden sm:block text-sm font-medium text-gray-700">
                      {profile?.full_name || 'User'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
                      >
                        <Link
                          to="/dashboard"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          <Home className="w-4 h-4 mr-3" />
                          Dashboard
                        </Link>
                        <Link
                          to={`/profile/${user.id}`}
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          <User className="w-4 h-4 mr-3" />
                          Profile
                        </Link>
                        <Link
                          to="/settings"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          <Settings className="w-4 h-4 mr-3" />
                          Settings
                        </Link>
                        <hr className="my-1" />
                        <button
                          onClick={handleSignOut}
                          disabled={signingOut}
                          className={`flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 ${signingOut ? 'opacity-60 cursor-not-allowed' : ''}`}
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          {signingOut ? 'Signing out…' : 'Sign Out'}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/auth"
                  className="hidden sm:block px-4 py-2 text-sm font-medium text-gray-800 hover:text-gray-900 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/auth"
                  className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-sky-500 text-white shadow hover:shadow-lg transition-shadow"
                >
                  Get Started
                </Link>
              </>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 py-4"
            >
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                {!user && (
                  <Link
                    to="/auth"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar


