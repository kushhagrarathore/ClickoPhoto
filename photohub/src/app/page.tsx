"use client"

import { motion } from "framer-motion"
import { Camera, User, Building2, ArrowRight, Star, Users, Award, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Instant Booking",
    description: "Book your photographer in minutes with our streamlined process",
    icon: CheckCircle,
  },
  {
    title: "Verified Professionals",
    description: "All photographers are vetted and background-checked",
    icon: Award,
  },
  {
    title: "Secure Payments",
    description: "Pay securely with our trusted payment system",
    icon: Users,
  },
]

const stats = [
  { label: "Professional Photographers", value: "500+", icon: Camera },
  { label: "Happy Clients", value: "10K+", icon: Users },
  { label: "Cities Covered", value: "50+", icon: Award },
  { label: "Projects Completed", value: "25K+", icon: CheckCircle },
]

export default function SelectionPage() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 min-h-screen">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        </div>
        
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl lg:text-8xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Welcome to
              </span>
              <br />
              <span className="text-gray-900">PhotoHub</span>
            </motion.h1>
            
            <motion.p 
              className="mt-8 text-xl leading-8 text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The premier marketplace connecting photography professionals with clients. 
              Choose your path and start your journey today.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Selection Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose Your Path
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Are you looking to hire photography services or offer them?
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* User Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" className="group relative overflow-hidden h-full border-2 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10 text-center pb-6">
                  <div className="mx-auto w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <User className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-gray-900 mb-4">I'm a Client</CardTitle>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    I need photography services for my events, projects, or special occasions. 
                    I want to find and book professional photographers, studios, or drone pilots.
                  </p>
                </CardHeader>
                <CardContent className="relative z-10 text-center pt-0">
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Browse verified professionals</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Instant booking & scheduling</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Secure payment processing</span>
                    </div>
                  </div>
                  <Button variant="gradient" className="w-full h-14 px-10 text-lg group-hover:scale-105 transition-transform duration-300">
                    <a href="/auth?type=user" className="flex items-center justify-center gap-2 w-full">
                      Get Started as Client
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Host Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" className="group relative overflow-hidden h-full border-2 hover:border-green-300 transition-all duration-300 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10 text-center pb-6">
                  <div className="mx-auto w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-gray-900 mb-4">I'm a Host</CardTitle>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    I offer photography services, studio space, or drone piloting. 
                    I want to showcase my work and connect with potential clients.
                  </p>
                </CardHeader>
                <CardContent className="relative z-10 text-center pt-0">
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Create professional profile</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Manage bookings & calendar</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Grow your business</span>
                    </div>
                  </div>
                  <Button size="xl" variant="gradient" className="w-full group-hover:scale-105 transition-transform duration-300">
                    <a href="/auth?type=host" className="flex items-center justify-center gap-2 w-full">
                      Get Started as Host
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose PhotoHub?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We make finding and booking photography services simple and secure
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" className="text-center p-8 h-full">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-4">{feature.title}</CardTitle>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
