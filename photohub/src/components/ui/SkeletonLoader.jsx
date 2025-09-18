import React from 'react'
import { motion } from 'framer-motion'

const SkeletonLoader = ({ className = '', animate = true }) => {
  const baseClasses = 'bg-gray-200 dark:bg-gray-700 rounded'
  const animationClasses = animate ? 'animate-pulse' : ''

  return (
    <div className={`${baseClasses} ${animationClasses} ${className}`} />
  )
}

export const ServiceCardSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      {/* Image skeleton */}
      <SkeletonLoader className="w-full h-48" />
      
      <div className="p-6">
        {/* Title skeleton */}
        <SkeletonLoader className="h-6 w-3/4 mb-2" />
        
        {/* Photographer name skeleton */}
        <SkeletonLoader className="h-4 w-1/2 mb-4" />
        
        {/* Rating skeleton */}
        <div className="flex items-center space-x-2 mb-4">
          <SkeletonLoader className="h-4 w-16" />
          <SkeletonLoader className="h-4 w-12" />
        </div>
        
        {/* Price skeleton */}
        <SkeletonLoader className="h-5 w-20 mb-4" />
        
        {/* Location skeleton */}
        <SkeletonLoader className="h-4 w-24 mb-4" />
        
        {/* Button skeleton */}
        <SkeletonLoader className="h-10 w-full" />
      </div>
    </motion.div>
  )
}

export const StatsCardSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <SkeletonLoader className="h-8 w-8 rounded-lg" />
        <SkeletonLoader className="h-4 w-4" />
      </div>
      <SkeletonLoader className="h-8 w-16 mb-2" />
      <SkeletonLoader className="h-4 w-24" />
    </motion.div>
  )
}

export const SuggestionCardSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4"
    >
      <div className="flex items-center space-x-3">
        <SkeletonLoader className="h-12 w-12 rounded-lg" />
        <div className="flex-1">
          <SkeletonLoader className="h-4 w-3/4 mb-2" />
          <SkeletonLoader className="h-3 w-1/2" />
        </div>
      </div>
    </motion.div>
  )
}

export const WelcomeSectionSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 mb-8 overflow-hidden"
    >
      <div className="relative z-10">
        <SkeletonLoader className="h-8 w-64 mb-2" />
        <SkeletonLoader className="h-4 w-96 mb-6" />
        <SkeletonLoader className="h-10 w-32" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-blue-200/30 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full -translate-y-16 translate-x-16" />
    </motion.div>
  )
}

export const FilterPanelSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i}>
            <SkeletonLoader className="h-4 w-20 mb-2" />
            <SkeletonLoader className="h-10 w-full" />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default SkeletonLoader



