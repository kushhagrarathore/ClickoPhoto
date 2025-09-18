import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

// Minimal vector drone icon (flat, no background)
// Props: size (number), className (string)
const DroneSVG = ({ size = 64, className = '' }) => (
  <svg
    width={size}
    height={(size * 36) / 64}
    viewBox="0 0 64 36"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Arms */}
    <rect x="10" y="16" width="44" height="4" rx="2" fill="#000000" />
    {/* Body */}
    <rect x="26" y="12" width="12" height="12" rx="6" fill="#000000" />
    {/* Camera */}
    <circle cx="32" cy="20" r="3" fill="#000000" />
    {/* Landing legs */}
    <path d="M22 24 h-6 c-2 0-3 2-3 3 v1" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
    <path d="M42 24 h6 c2 0 3 2 3 3 v1" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
    {/* Propellers (groups for spin) */}
    <g>
      <circle cx="6" cy="18" r="5" stroke="#000000" strokeWidth="2" />
      <motion.line x1="1" y1="18" x2="11" y2="18" stroke="#000000" strokeWidth="2"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 0.6 }}
        style={{ originX: 0.5, originY: 0.5 }} />
    </g>
    <g>
      <circle cx="58" cy="18" r="5" stroke="#000000" strokeWidth="2" />
      <motion.line x1="53" y1="18" x2="63" y2="18" stroke="#000000" strokeWidth="2"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 0.6 }}
        style={{ originX: 0.5, originY: 0.5 }} />
    </g>
  </svg>
)

// Animated wrapper that moves the drone smoothly across random waypoints
const AnimatedDrone = ({ className = '' }) => {
  const controls = useAnimation()

  useEffect(() => {
    const vw = () => (typeof window !== 'undefined' ? window.innerWidth : 1280)
    const vh = () => (typeof window !== 'undefined' ? window.innerHeight : 720)

    let isMounted = true

    const next = async () => {
      if (!isMounted) return
      const x = Math.random() * (vw() - 120) + 60
      const y = Math.random() * (vh() * 0.4) + 40 // stay in hero band
      const r = (Math.random() - 0.5) * 10
      await controls.start({ x, y, rotate: r, transition: { type: 'spring', stiffness: 30, damping: 20, duration: 4 } })
      if (isMounted) next()
    }

    // start somewhere off left, then loop
    controls.set({ x: -80, y: 80, rotate: 0 })
    next()

    return () => { isMounted = false }
  }, [controls])

  // Scale down on small screens via CSS classes
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none fixed opacity-60 ${className}`}
      style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.25))' }}
      animate={controls}
    >
      <DroneSVG size={108} />
    </motion.div>
  )
}

export default AnimatedDrone


