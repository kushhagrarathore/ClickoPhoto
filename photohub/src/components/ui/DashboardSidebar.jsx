import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Home, 
  Calendar, 
  Settings, 
  User, 
  Camera, 
  Star, 
  MessageSquare,
  BarChart3,
  CreditCard,
  HelpCircle
} from 'lucide-react'

const DashboardSidebar = ({ userRole = 'customer' }) => {
  const location = useLocation()

  const customerNavItems = [
    { name: 'Dashboard', path: '/customer/dashboard', icon: Home },
    { name: 'My Bookings', path: '/customer/bookings', icon: Calendar },
    { name: 'Browse Services', path: '/services', icon: Camera },
    { name: 'My Reviews', path: '/customer/reviews', icon: Star },
    { name: 'Messages', path: '/customer/messages', icon: MessageSquare },
    { name: 'Payments', path: '/customer/payments', icon: CreditCard },
    { name: 'Profile', path: '/customer/profile', icon: User },
    { name: 'Settings', path: '/customer/settings', icon: Settings },
  ]

  const hostNavItems = [
    { name: 'Dashboard', path: '/host/dashboard', icon: Home },
    { name: 'My Services', path: '/host/services', icon: Camera },
    { name: 'Bookings', path: '/host/bookings', icon: Calendar },
    { name: 'Reviews', path: '/host/reviews', icon: Star },
    { name: 'Analytics', path: '/host/analytics', icon: BarChart3 },
    { name: 'Messages', path: '/host/messages', icon: MessageSquare },
    { name: 'Earnings', path: '/host/earnings', icon: CreditCard },
    { name: 'Profile', path: '/host/profile', icon: User },
    { name: 'Settings', path: '/host/settings', icon: Settings },
  ]

  const navItems = userRole === 'host' ? hostNavItems : customerNavItems

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  return (
    <div className="w-64 bg-white shadow-sm border-r border-gray-200 h-full">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          {userRole === 'host' ? 'Host Dashboard' : 'Customer Dashboard'}
        </h2>
        
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path)
            
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className={`w-5 h-5 ${
                  active ? 'text-primary-600' : 'text-gray-500'
                }`} />
                <span>{item.name}</span>
                {active && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 w-1 h-8 bg-primary-600 rounded-r-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Help Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link
            to="/help"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <HelpCircle className="w-5 h-5 text-gray-500" />
            <span>Help & Support</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardSidebar


