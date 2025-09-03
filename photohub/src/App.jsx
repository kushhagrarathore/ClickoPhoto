import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from './contexts/AuthContext'

// Layout Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Page Components
import LandingPage from './pages/LandingPage'
import Auth from './pages/Auth'
import HostDashboard from './pages/HostDashboard'
import CustomerDashboard from './pages/CustomerDashboard'
import ServiceListing from './pages/ServiceListing'
import BookingPage from './pages/BookingPage'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

// Host Dashboard Components
import HostDashboardLayout from './components/layout/HostDashboardLayout'
import Dashboard from './pages/host-dashboard/Dashboard'
import Services from './pages/host-dashboard/Services'
import Bookings from './pages/host-dashboard/Bookings'
import Earnings from './pages/host-dashboard/Earnings'
import Reviews from './pages/host-dashboard/Reviews'
import HostProfile from './pages/host-dashboard/Profile'
import Settings from './pages/host-dashboard/Settings'

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user, profile, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/auth" replace />
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(profile?.role)) {
    return <Navigate to="/" replace />
  }

  return children
}

// Page Transition Component
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
)

function App() {
  const { user, profile } = useAuth()

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes>
            {/* Public Routes */}
            <Route 
              path="/" 
              element={
                <PageTransition>
                  <LandingPage />
                </PageTransition>
              } 
            />
            
            <Route 
              path="/auth" 
              element={
                <PageTransition>
                  <Auth />
                </PageTransition>
              } 
            />
            
            <Route 
              path="/services" 
              element={
                <PageTransition>
                  <ServiceListing />
                </PageTransition>
              } 
            />
            
            <Route 
              path="/profile/:id" 
              element={
                <PageTransition>
                  <Profile />
                </PageTransition>
              } 
            />

            {/* Host Dashboard Routes - Only accessible to users with 'host' role */}
            <Route 
              path="/host-dashboard" 
              element={
                <ProtectedRoute allowedRoles={['host']}>
                  <HostDashboardLayout />
                </ProtectedRoute>
              }
            >
              {/* Nested routes for host dashboard */}
              <Route index element={<Dashboard />} />
              <Route path="services" element={<Services />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="earnings" element={<Earnings />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="profile" element={<HostProfile />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            {/* Legacy host dashboard route - redirect to new structure */}
            <Route 
              path="/host/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['host']}>
                  <Navigate to="/host-dashboard" replace />
                </ProtectedRoute>
              } 
            />
            
            {/* Customer Dashboard Route */}
            <Route 
              path="/customer/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <PageTransition>
                    <CustomerDashboard />
                  </PageTransition>
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/booking/:serviceId" 
              element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <PageTransition>
                    <BookingPage />
                  </PageTransition>
                </ProtectedRoute>
              } 
            />

            {/* Auto-redirect based on user role */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  {profile?.role === 'host' ? (
                    <Navigate to="/host-dashboard" replace />
                  ) : (
                    <Navigate to="/customer/dashboard" replace />
                  )}
                </ProtectedRoute>
              } 
            />

            {/* 404 Route */}
            <Route 
              path="*" 
              element={
                <PageTransition>
                  <NotFound />
                </PageTransition>
              } 
            />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  )
}

export default App


