"use client"

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, MapPin, Filter, Star, Heart, Clock, DollarSign, SlidersHorizontal, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

// Mock data for listings
const mockListings = [
  {
    id: "1",
    title: "Professional Wedding Photography",
    host: {
      name: "Sophia Miller",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      rating: 4.8,
      reviewCount: 127,
    },
    location: "San Francisco, CA",
    hourlyRate: 150,
    dailyRate: 1200,
    services: ["Photography", "Videography"],
    tags: ["Wedding", "Events", "Portrait"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
    description: "Professional photographer with 8+ years of experience specializing in weddings and corporate events.",
    availability: "Available today",
    responseTime: "Responds in 2 hours",
  },
  {
    id: "2",
    title: "Aerial Drone Photography & Videography",
    host: {
      name: "Ethan Carter",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      rating: 4.9,
      reviewCount: 89,
    },
    location: "Los Angeles, CA",
    hourlyRate: 200,
    dailyRate: 1500,
    services: ["Drone", "Aerial"],
    tags: ["Real Estate", "Events", "Commercial"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "FAA certified drone pilot with professional equipment for stunning aerial footage.",
    availability: "Available today",
    responseTime: "Responds in 1 hour",
  },
  {
    id: "3",
    title: "Studio Portrait & Product Photography",
    host: {
      name: "Anna Anderson",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      rating: 4.7,
      reviewCount: 156,
    },
    location: "New York, NY",
    hourlyRate: 120,
    dailyRate: 900,
    services: ["Studio", "Portrait"],
    tags: ["Portrait", "Product", "Commercial"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400",
    description: "Modern studio space with professional lighting for portraits and product photography.",
    availability: "Available today",
    responseTime: "Responds in 3 hours",
  },
  {
    id: "4",
    title: "Event Photography Services",
    host: {
      name: "David Wilson",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      rating: 4.6,
      reviewCount: 203,
    },
    location: "Miami, FL",
    hourlyRate: 180,
    dailyRate: 1400,
    services: ["Photography", "Events"],
    tags: ["Events", "Corporate", "Parties"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
    description: "Experienced event photographer capturing corporate events, parties, and special occasions.",
    availability: "Available today",
    responseTime: "Responds in 4 hours",
  },
]

const serviceTypes = [
  { value: "all", label: "All Services" },
  { value: "photography", label: "Photography" },
  { value: "videography", label: "Videography" },
  { value: "drone", label: "Drone" },
  { value: "studio", label: "Studio" },
]

const priceRanges = [
  { value: "all", label: "All Prices" },
  { value: "0-100", label: "Under $100/hr" },
  { value: "100-200", label: "$100 - $200/hr" },
  { value: "200-300", label: "$200 - $300/hr" },
  { value: "300+", label: "Over $300/hr" },
]

const ratings = [
  { value: "all", label: "All Ratings" },
  { value: "4.5+", label: "4.5+ Stars" },
  { value: "4.0+", label: "4.0+ Stars" },
  { value: "3.5+", label: "3.5+ Stars" },
]

const locations = [
  { value: "all", label: "All Locations" },
  { value: "san-francisco", label: "San Francisco, CA" },
  { value: "los-angeles", label: "Los Angeles, CA" },
  { value: "new-york", label: "New York, NY" },
  { value: "miami", label: "Miami, FL" },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedService, setSelectedService] = useState("all")
  const [selectedPriceRange, setSelectedPriceRange] = useState("all")
  const [selectedRating, setSelectedRating] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  const filteredListings = mockListings.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.host.name.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesService = selectedService === "all" || 
                          listing.services.some(service => 
                            service.toLowerCase().includes(selectedService.toLowerCase())
                          )
    
    const matchesPrice = selectedPriceRange === "all" || (() => {
      const [min, max] = selectedPriceRange.split("-").map(Number)
      if (selectedPriceRange === "300+") {
        return listing.hourlyRate >= 300
      }
      return listing.hourlyRate >= min && listing.hourlyRate <= max
    })()
    
    const matchesRating = selectedRating === "all" || 
                         listing.host.rating >= parseFloat(selectedRating)
    
    const matchesLocation = selectedLocation === "all" || 
                           listing.location.toLowerCase().includes(selectedLocation.toLowerCase())
    
    return matchesSearch && matchesService && matchesPrice && matchesRating && matchesLocation
  })

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(id)) {
      newFavorites.delete(id)
    } else {
      newFavorites.add(id)
    }
    setFavorites(newFavorites)
  }

  const clearAllFilters = () => {
    setSearchQuery("")
    setSelectedService("all")
    setSelectedPriceRange("all")
    setSelectedRating("all")
    setSelectedLocation("all")
  }

  const activeFiltersCount = [
    searchQuery,
    selectedService !== "all",
    selectedPriceRange !== "all",
    selectedRating !== "all",
    selectedLocation !== "all"
  ].filter(Boolean).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Search Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-20 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl font-bold text-gray-900 mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Find Photographers, Studios & More
            </motion.h1>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for photographers, studios, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 rounded-2xl"
              />
            </div>

            {/* Filter Toggle */}
            <div className="flex items-center justify-center mt-6">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 rounded-full px-6"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                className="lg:w-80 flex-shrink-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-6 sticky top-32">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Filter className="h-5 w-5 text-gray-500" />
                      <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                    </div>
                    {activeFiltersCount > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearAllFilters}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        Clear all
                      </Button>
                    )}
                  </div>

                  <div className="space-y-6">
                    {/* Service Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Service Type
                      </label>
                      <Select value={selectedService} onValueChange={setSelectedService}>
                        <SelectTrigger className="rounded-xl border-2 border-gray-200 focus:border-blue-500">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Price Range */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Price Range
                      </label>
                      <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                        <SelectTrigger className="rounded-xl border-2 border-gray-200 focus:border-blue-500">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {priceRanges.map((range) => (
                            <SelectItem key={range.value} value={range.value}>
                              {range.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Rating */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Minimum Rating
                      </label>
                      <Select value={selectedRating} onValueChange={setSelectedRating}>
                        <SelectTrigger className="rounded-xl border-2 border-gray-200 focus:border-blue-500">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {ratings.map((rating) => (
                            <SelectItem key={rating.value} value={rating.value}>
                              {rating.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Location
                      </label>
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger className="rounded-xl border-2 border-gray-200 focus:border-blue-500">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location.value} value={location.value}>
                              {location.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <motion.p 
                className="text-gray-600 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {filteredListings.length} {filteredListings.length === 1 ? 'result' : 'results'} found
              </motion.p>
              <Select>
                <SelectTrigger className="w-48 rounded-xl border-2 border-gray-200 focus:border-blue-500">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6">
              <AnimatePresence>
                {filteredListings.map((listing, index) => (
                  <motion.div
                    key={listing.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    layout
                  >
                    <Card variant="elevated" className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-80 md:h-64 h-64 md:h-auto relative">
                          <img
                            src={listing.image}
                            alt={listing.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-lg"
                            onClick={() => toggleFavorite(listing.id)}
                          >
                            <Heart 
                              className={`h-5 w-5 transition-colors ${
                                favorites.has(listing.id) 
                                  ? "fill-red-500 text-red-500" 
                                  : "text-gray-600"
                              }`} 
                            />
                          </Button>
                        </div>
                        
                        <div className="flex-1 p-8">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {listing.title}
                              </h3>
                              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                {listing.description}
                              </p>
                              
                              {/* Host Info */}
                              <div className="flex items-center space-x-4 mb-6">
                                <Avatar className="h-12 w-12 ring-2 ring-blue-100">
                                  <AvatarImage src={listing.host.image} alt={listing.host.name} />
                                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold">
                                    {listing.host.name.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="text-lg font-semibold text-gray-900">{listing.host.name}</p>
                                  <div className="flex items-center space-x-2">
                                    <div className="flex items-center space-x-1">
                                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                      <span className="text-sm font-semibold">{listing.host.rating}</span>
                                      <span className="text-sm text-gray-500">({listing.host.reviewCount} reviews)</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Tags */}
                              <div className="flex flex-wrap gap-2 mb-6">
                                {listing.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary" className="px-3 py-1 rounded-full">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>

                              {/* Location & Availability */}
                              <div className="flex items-center space-x-6 mb-6">
                                <div className="flex items-center space-x-2 text-gray-600">
                                  <MapPin className="h-5 w-5" />
                                  <span className="text-sm font-medium">{listing.location}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-600">
                                  <Clock className="h-5 w-5" />
                                  <span className="text-sm font-medium">{listing.availability}</span>
                                </div>
                                <div className="text-sm text-green-600 font-medium">
                                  {listing.responseTime}
                                </div>
                              </div>

                              {/* Pricing & Actions */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                  <div className="text-2xl font-bold text-gray-900">
                                    ${listing.hourlyRate}/hr
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    or ${listing.dailyRate}/day
                                  </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                  <Button variant="outline" size="lg" className="rounded-xl">
                                    Contact
                                  </Button>
                                  <Button variant="gradient" size="lg" className="rounded-xl">
                                    Book Now
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredListings.length === 0 && (
                <motion.div 
                  className="text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your search criteria or filters.</p>
                  <Button variant="outline" onClick={clearAllFilters}>
                    Clear all filters
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
