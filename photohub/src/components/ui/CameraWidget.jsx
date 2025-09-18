import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera } from 'lucide-react'

const CameraWidget = () => {
  const [isHolding, setIsHolding] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showFlash, setShowFlash] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [isCaptured, setIsCaptured] = useState(false)
  const intervalRef = useRef(null)
  const audioRef = useRef(null)

  // Handle mouse/touch events
  const handleStart = () => {
    if (isCaptured) return
    setIsHolding(true)
    setProgress(0)
    
    // Start progress animation
    intervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          handleCapture()
          return 100
        }
        return prev + 2 // 2% per 40ms = 2 seconds total
      })
    }, 40)
  }

  const handleEnd = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setIsHolding(false)
    setProgress(0)
  }

  const handleCapture = () => {
    if (isCaptured) return
    
    // Clear interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    
    setIsCaptured(true)
    setIsHolding(false)
    
    // Trigger flash
    setShowFlash(true)
    
    // Play shutter sound
    if (audioRef.current) {
      try {
        audioRef.current.currentTime = 0
        audioRef.current.play().catch(() => {})
      } catch (error) {
        console.log('Audio play failed:', error)
      }
    }
    
    // Show toast
    setTimeout(() => {
      setShowToast(true)
    }, 200)
    
    // Reset after 3 seconds
    setTimeout(() => {
      setShowFlash(false)
      setShowToast(false)
      setIsCaptured(false)
      setProgress(0)
    }, 3000)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <div className="fixed top-20 left-4 z-40">
      {/* Camera Widget */}
      <div className="relative mb-3">
        {/* Progress Circle */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from 0deg, #3b82f6 0%, #3b82f6 ${progress}%, #e5e7eb ${progress}%, #e5e7eb 100%)`,
            width: '60px',
            height: '60px',
            padding: '2px'
          }}
          animate={{ rotate: isHolding ? 360 : 0 }}
          transition={{ duration: 2, ease: "linear" }}
        >
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg">
            {/* Camera Icon */}
            <motion.div
              animate={{ 
                rotate: isHolding ? 0 : 360,
                scale: isHolding ? 1.1 : 1
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 0.2 }
              }}
              className="text-gray-700"
            >
              <Camera size={16} />
            </motion.div>
          </div>
        </motion.div>

        {/* Clickable Area */}
        <div
          className="absolute inset-0 rounded-full cursor-pointer"
          onMouseDown={handleStart}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchEnd={handleEnd}
          style={{ width: '60px', height: '60px' }}
        />
      </div>

      {/* Instruction Text - Below Camera */}
      <motion.p 
        className="text-xs text-gray-700 dark:text-gray-300 font-medium bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm whitespace-nowrap"
        animate={{ 
          opacity: isCaptured ? 0.5 : 1,
          scale: isHolding ? 1.05 : 1
        }}
        transition={{ duration: 0.2 }}
      >
        {isCaptured ? 'Captured!' : 'Hold me for a picture'}
      </motion.p>

      {/* Flash Overlay */}
      <AnimatePresence>
        {showFlash && (
          <motion.div
            className="fixed inset-0 bg-white z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, times: [0, 0.1, 1] }}
          />
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50"
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-2">
              <Camera size={16} />
              <span className="font-medium">Photo Captured!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        preload="auto"
        src="https://assets.mixkit.co/sfx/download/mixkit-camera-shutter-click-1133.wav"
      />
    </div>
  )
}

export default CameraWidget
