"use client"

import { motion } from "framer-motion"
import { Search, Calendar, Heart, User, Settings, LogOut, Camera, Star, MapPin, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const recentBookings = [
  {
    id: "1",
    photographer: "Ethan Carter",
    service: "Wedding Photography",
    date: "Dec 15, 2024",
    time: "2:00 PM",
    location: "San Francisco, CA",
    status: "Confirmed",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
  },
  {
    id: "2",
    photographer: "Sophia Miller",
    service: "Portrait Session",
    date: "Dec 20, 2024",
    time: "10:00 AM",
    location: "Los Angeles, CA",
    status: "Pending",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
  },
]

const savedPhotographers = [
  {
    id: "1",
    name: "Ethan Carter",
    specialty: "Wedding & Events",
    rating: 4.9,
    reviewCount: 127,
    location: "San Francisco, CA",
    hourlyRate: 150,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80",
  },
  {
    id: "2",
    name: "Sophia Miller",
    specialty: "Portrait & Fashion",
    rating: 4.8,
    reviewCount: 89,
    location: "Los Angeles, CA",
    hourlyRate: 180,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80",
  },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Camera className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">PhotoHub Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Find Photographers
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h2>
          <p className="text-gray-600">Here's what's happening with your photography bookings</p>
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
                    <p className="text-2xl font-bold text-gray-900">3</p>
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
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Saved Photographers</p>
                    <p className="text-2xl font-bold text-gray-900">12</p>
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
                    <p className="text-sm font-medium text-gray-600">Completed Sessions</p>
                    <p className="text-2xl font-bold text-gray-900">8</p>
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
                    <User className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Spent</p>
                    <p className="text-2xl font-bold text-gray-900">$2,450</p>
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
                        alt={booking.photographer}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {booking.photographer}
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

          {/* Saved Photographers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2" />
                  Saved Photographers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {savedPhotographers.map((photographer) => (
                    <div key={photographer.id} className="flex items-center space-x-4 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                      <img
                        src={photographer.image}
                        alt={photographer.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {photographer.name}
                        </p>
                        <p className="text-sm text-gray-500">{photographer.specialty}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-gray-600 ml-1">
                              {photographer.rating} ({photographer.reviewCount})
                            </span>
                          </div>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-600">${photographer.hourlyRate}/hr</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Book Now
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    Browse More Photographers
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-20 flex-col">
                  <Search className="h-6 w-6 mb-2" />
                  <span>Find Photographers</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <Calendar className="h-6 w-6 mb-2" />
                  <span>Schedule Session</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <User className="h-6 w-6 mb-2" />
                  <span>Update Profile</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}


