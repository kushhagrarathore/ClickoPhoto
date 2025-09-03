import React, { useState } from 'react'
import { Star } from 'lucide-react'

const RatingStars = ({ 
  rating = 0, 
  size = 'md', 
  interactive = false, 
  onRatingChange,
  showValue = true 
}) => {
  const [hoverRating, setHoverRating] = useState(0)
  const [selectedRating, setSelectedRating] = useState(rating)

  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
  }

  const handleStarClick = (starValue) => {
    if (interactive) {
      setSelectedRating(starValue)
      onRatingChange?.(starValue)
    }
  }

  const handleStarHover = (starValue) => {
    if (interactive) {
      setHoverRating(starValue)
    }
  }

  const handleMouseLeave = () => {
    if (interactive) {
      setHoverRating(0)
    }
  }

  const displayRating = interactive ? (hoverRating || selectedRating) : rating

  return (
    <div className="flex items-center space-x-1">
      <div 
        className="flex items-center"
        onMouseLeave={handleMouseLeave}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? 'button' : undefined}
            onClick={() => handleStarClick(star)}
            onMouseEnter={() => handleStarHover(star)}
            className={`${
              interactive ? 'cursor-pointer' : 'cursor-default'
            } transition-colors`}
            disabled={!interactive}
          >
            <Star
              className={`${sizeClasses[size]} ${
                star <= displayRating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
      {showValue && (
        <span className="text-sm text-gray-600 ml-1">
          {displayRating.toFixed(1)}
        </span>
      )}
    </div>
  )
}

export default RatingStars


