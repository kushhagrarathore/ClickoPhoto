import React from 'react'
import { Star } from 'lucide-react'

const RatingStars = ({ rating, size = 'md', showNumber = false }) => {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  // Size classes
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  }

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star
        key={`full-${i}`}
        className={`${sizeClasses[size]} text-yellow-400 fill-current`}
      />
    )
  }

  // Add half star if needed
  if (hasHalfStar) {
    stars.push(
      <div key="half" className="relative">
        <Star
          className={`${sizeClasses[size]} text-gray-300 fill-current`}
        />
        <div className="absolute inset-0 overflow-hidden">
          <Star
            className={`${sizeClasses[size]} text-yellow-400 fill-current`}
            style={{ clipPath: 'inset(0 50% 0 0)' }}
          />
        </div>
      </div>
    )
  }

  // Add empty stars
  const emptyStars = 5 - Math.ceil(rating)
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Star
        key={`empty-${i}`}
        className={`${sizeClasses[size]} text-gray-300`}
      />
    )
  }

  return (
    <div className="flex items-center space-x-1">
      {stars}
      {showNumber && (
        <span className="ml-2 text-sm text-gray-600">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  )
}

export default RatingStars


