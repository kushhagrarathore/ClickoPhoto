import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  LayoutDashboard, 
  Package, 
  Calendar, 
  DollarSign, 
  Star, 
  User, 
  Settings,
  Menu,
  X,
  Bell,
  Search,
  ChevronDown,
  LogOut,
  HelpCircle,
  Camera,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  BookOpen,
  MessageSquare,
  CreditCard,
  BarChart3
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

const DashboardLayout = ({ userRole = 'customer' }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [notificationCount, setNotificationCount] = useState(3)
  const location = useLocation()
  const { user, profile, signOut } = useAuth()
  const dropdownRef = useRef(null)
  const notificationRef = useRef(null)

  const customerNavItems = [
    { name: 'Dashboard', path: '/customer/dashboard', icon: LayoutDashboard },
    { name: 'My Bookings', path: '/customer/bookings', icon: Calendar },
    { name: 'Browse Services', path: '/services', icon: Camera },
    { name: 'My Reviews', path: '/customer/reviews', icon: Star },
    { name: 'Messages', path: '/customer/messages', icon: MessageSquare },
    { name: 'Payments', path: '/customer/payments', icon: CreditCard },
    { name: 'Profile', path: '/customer/profile', icon: User },
    { name: 'Settings', path: '/customer/settings', icon: Settings },
  ]

  const hostNavItems = [
    { name: 'Dashboard', path: '/host/dashboard', icon: LayoutDashboard },
    { name: 'My Services', path: '/host/services', icon: Package },
    { name: 'Bookings', path: '/host/bookings', icon: Calendar },
    { name: 'Reviews', path: '/host/reviews', icon: Star },
    { name: 'Analytics', path: '/host/analytics', icon: BarChart3 },
    { name: 'Messages', path: '/host/messages', icon: MessageSquare },
    { name: 'Earnings', path: '/host/earnings', icon: DollarSign },
    { name: 'Profile', path: '/host/profile', icon: User },
    { name: 'Settings', path: '/host/settings', icon: Settings },
  ]

  const navItems = userRole === 'host' ? hostNavItems : customerNavItems

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false)
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close mobile sidebar when route changes
  useEffect(() => {
    setSidebarOpen(false)
  }, [location.pathname])

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  const notifications = [
    { id: 1, title: 'New booking request', message: 'Sarah Johnson wants to book your portrait session', time: '2 min ago', unread: true },
    { id: 2, title: 'Payment received', message: 'Payment of $150 received for wedding photography', time: '1 hour ago', unread: true },
    { id: 3, title: 'Review received', message: 'You received a 5-star review from Mike Chen', time: '3 hours ago', unread: false },
  ]

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300`}>
      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-xl transform lg:translate-x-0 transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } ${sidebarCollapsed ? 'lg:w-16' : 'lg:w-64'}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
          <Link to={userRole === 'host' ? '/host/dashboard' : '/customer/dashboard'} className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Camera className="w-4 h-4 text-white" />
            </div>
            {!sidebarCollapsed && (
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                PhotoDroneHire
              </span>
            )}
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 px-4">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.path)
              
              return (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={item.path}
                    className={`group flex items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      active
                        ? 'bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 text-purple-700 dark:text-purple-300 shadow-sm'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <div className={`p-2 rounded-lg transition-all duration-200 ${
                      active 
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg' 
                        : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 group-hover:text-white'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {!sidebarCollapsed && (
                      <span className="truncate">{item.name}</span>
                    )}
                    {active && !sidebarCollapsed && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="ml-auto w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Collapse Toggle - Desktop Only */}
          <div className="hidden lg:block mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="w-full flex items-center justify-center p-3 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {sidebarCollapsed ? (
                <ChevronRight className="w-5 h-5" />
              ) : (
                <ChevronLeft className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Help Section */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Link
              to="/help"
              className="group flex items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
            >
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 group-hover:text-white transition-all duration-200">
                <HelpCircle className="w-4 h-4" />
              </div>
              {!sidebarCollapsed && <span>Help & Support</span>}
            </Link>
          </div>
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ease-in-out ${
        sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
      }`}>
        {/* Sticky Header */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Mobile menu button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>

              {/* Search Bar */}
              <div className="flex-1 max-w-lg mx-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, photographers..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Right side actions */}
              <div className="flex items-center space-x-4">
                {/* Dark Mode Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                {/* Notifications */}
                <div className="relative" ref={notificationRef}>
                  <button
                    onClick={() => setNotificationDropdownOpen(!notificationDropdownOpen)}
                    className="relative p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Bell className="w-5 h-5" />
                    {notificationCount > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium"
                      >
                        {notificationCount}
                      </motion.span>
                    )}
                  </button>

                  {/* Notifications Dropdown */}
                  <AnimatePresence>
                    {notificationDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
                      >
                        <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Notifications</h3>
                        </div>
                        <div className="max-h-64 overflow-y-auto">
                          {notifications.map((notification) => (
                            <motion.div
                              key={notification.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                            >
                              <div className="flex items-start space-x-3">
                                <div className={`w-2 h-2 rounded-full mt-2 ${
                                  notification.unread ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                                }`} />
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                    {notification.title}
                                  </p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                    {notification.message}
                                  </p>
                                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                    {notification.time}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                          <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium">
                            View all notifications
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* User Profile Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                    className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {profile?.full_name?.charAt(0) || 'U'}
                    </div>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {profile?.full_name || 'User'}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {userRole === 'host' ? 'Host' : 'Customer'}
                      </p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </button>

                  {/* Profile Dropdown */}
                  <AnimatePresence>
                    {profileDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
                      >
                        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {profile?.full_name || 'User'}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {profile?.email}
                          </p>
                        </div>
                        <div className="py-1">
                          <Link
                            to={userRole === 'host' ? '/host/profile' : '/customer/profile'}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          >
                            <User className="w-4 h-4 mr-3" />
                            Profile
                          </Link>
                          <Link
                            to={userRole === 'host' ? '/host/settings' : '/customer/settings'}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          >
                            <Settings className="w-4 h-4 mr-3" />
                            Settings
                          </Link>
                          <button
                            onClick={handleSignOut}
                            className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                          >
                            <LogOut className="w-4 h-4 mr-3" />
                            Logout
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout



