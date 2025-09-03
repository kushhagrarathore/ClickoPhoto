"use client"

import { motion } from "framer-motion"
import { Calendar, DollarSign, Star, Users, Settings, LogOut, Camera, TrendingUp, MapPin, Clock, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const recentBookings = [
  {
    id: "1",
    client: "Sarah Johnson",
    service: "Wedding Photography",
    date: "Dec 15, 2024",
    time: "2:00 PM",
    location: "San Francisco, CA",
    status: "Confirmed",
    amount: 1500,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
  },
  {
    id: "2",
    client: "Michael Chen",
    service: "Portrait Session",
    date: "Dec 20, 2024",
    time: "10:00 AM",
    location: "Los Angeles, CA",
    status: "Pending",
    amount: 300,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
  },
]

const portfolioStats = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=200",
    title: "Wedding Collection",
    views: 1247,
    likes: 89,
    category: "Wedding",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200",
    title: "Portrait Series",
    views: 892,
    likes: 67,
    category: "Portrait",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200",
    title: "Aerial Photography",
    views: 1563,
    likes: 123,
    category: "Drone",
  },
]

export default function HostDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Camera className="h-8 w-8 text-green-600" />
              <h1 className="text-xl font-bold text-gray-900">PhotoHub Host Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View Profile
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Ethan!</h2>
          <p className="text-gray-600">Here's how your photography business is performing</p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Upcoming Bookings</p>
                    <p className="text-2xl font-bold text-gray-900">5</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">This Month</p>
                    <p className="text-2xl font-bold text-gray-900">$3,240</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Star className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Rating</p>
                    <p className="text-2xl font-bold text-gray-900">4.9</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Clients</p>
                    <p className="text-2xl font-bold text-gray-900">127</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Bookings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Recent Bookings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center space-x-4 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                      <img
                        src={booking.image}
                        alt={booking.client}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {booking.client}
                        </p>
                        <p className="text-sm text-gray-500">{booking.service}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-400 mt-1">
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {booking.date} at {booking.time}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {booking.location}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">${booking.amount}</p>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          booking.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    View All Bookings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Portfolio Performance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Portfolio Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {portfolioStats.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500">{item.category}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-400 mt-1">
                          <span className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {item.views} views
                          </span>
                          <span className="flex items-center">
                            <Star className="h-3 w-3 mr-1" />
                            {item.likes} likes
                          </span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    Manage Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-20 flex-col">
                  <Calendar className="h-6 w-6 mb-2" />
                  <span>View Calendar</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <Camera className="h-6 w-6 mb-2" />
                  <span>Add Photos</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <DollarSign className="h-6 w-6 mb-2" />
                  <span>Set Rates</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <Users className="h-6 w-6 mb-2" />
                  <span>View Clients</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Earnings Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Earnings Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Earnings chart will be displayed here</p>
                  <p className="text-sm">Monthly revenue and growth trends</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}


