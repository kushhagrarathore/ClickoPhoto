import React, { useRef, useState } from 'react'
import { uploadImages, parseServiceImages } from '@/utils/imageUtils'
import { X } from 'lucide-react'

export const ImageUpload = ({ images = [], onImagesChange, maxImages = 6, bucket = 'service-images', hostId, disabled }) => {
  const inputRef = useRef(null)
  const [uploading, setUploading] = useState(false)

  const handleFiles = async (fileList) => {
    const files = Array.from(fileList || [])
    if (files.length === 0) return
    
    // Filter files by allowed types
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
    const validFiles = files.filter(file => allowedTypes.includes(file.type))
    
    if (validFiles.length !== files.length) {
      const invalidFiles = files.filter(file => !allowedTypes.includes(file.type))
      console.warn('Some files were skipped due to unsupported format:', invalidFiles.map(f => f.name))
    }
    
    if (validFiles.length === 0) {
      console.error('No valid image files selected. Please use JPEG, PNG, WebP, or GIF formats.')
      return
    }
    
    if (!hostId) {
      console.error('Host ID is not available. Please ensure you are logged in.')
      alert('Host ID is not available. Please refresh the page and try again.')
      return
    }
    
    setUploading(true)
    try {
      console.log('Starting upload of', validFiles.length, 'files')
      
      // Add timeout to prevent hanging
      const uploadPromise = uploadImages({ files: validFiles, bucket, hostId })
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Upload timeout after 30 seconds')), 30000)
      )
      
      const uploaded = await Promise.race([uploadPromise, timeoutPromise])
      console.log('Upload completed:', uploaded)
      const next = [...images, ...uploaded].slice(0, maxImages)
      onImagesChange(next)
    } catch (e) {
      console.error('image upload error:', e)
      alert(`Upload failed: ${e.message}`)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <div
        className={`border-2 border-dashed rounded-lg p-4 text-center ${disabled ? 'opacity-60' : ''}`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault()
          if (disabled) return
          handleFiles(e.dataTransfer.files)
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
          disabled={disabled}
        />
        <button
          type="button"
          className="btn-outline"
          onClick={() => !disabled && inputRef.current?.click()}
          disabled={disabled}
        >
          {uploading ? 'Uploading…' : 'Select Images'}
        </button>
        <p className="text-xs text-gray-500 mt-2">Drag & drop or select up to {maxImages} images (JPEG, PNG, WebP, GIF).</p>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
          {images.map((img, idx) => (
            <div key={idx} className="relative group">
              <img src={img.url || img} alt="service" className="w-full h-28 object-cover rounded" />
              <button
                type="button"
                className="absolute top-1 right-1 bg-white/90 rounded-full p-1 text-gray-700 opacity-0 group-hover:opacity-100"
                onClick={() => onImagesChange(images.filter((_, i) => i !== idx))}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export const ImageCarousel = ({ images = [], className = '' }) => {
  const parsed = parseServiceImages(images)
  const [index, setIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  
  // Debug: Log what we're getting (remove in production)
  // if (parsed.length > 0) {
  //   console.log('ImageCarousel: Displaying image with URL:', parsed[0].url)
  // }
  
  if (parsed.length === 0) return (
    <div className={`bg-gray-100 flex items-center justify-center ${className}`}>
      <span className="text-gray-500 text-sm">No images</span>
    </div>
  )
  const clamp = (i) => (i + parsed.length) % parsed.length

  // Ensure we have a valid URL string
  const imageUrl = typeof parsed[index].url === 'string' ? parsed[index].url : parsed[index].url?.url || ''
  
  const openFullscreen = () => {
    setIsFullscreen(true)
  }

  const closeFullscreen = () => {
    setIsFullscreen(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeFullscreen()
    } else if (e.key === 'ArrowLeft') {
      setIndex((i) => clamp(i - 1))
    } else if (e.key === 'ArrowRight') {
      setIndex((i) => clamp(i + 1))
    }
  }

  return (
    <>
      <div className={`relative overflow-hidden bg-gray-100 cursor-pointer ${className}`} onClick={openFullscreen}>
        <img 
          src={imageUrl} 
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-105" 
          alt="service"
          onError={(e) => {
            console.error('Image failed to load. URL:', imageUrl)
            console.error('Original parsed object:', parsed[index])
            e.target.style.display = 'none'
            // Show fallback content
            const fallback = document.createElement('div')
            fallback.className = 'w-full h-full flex items-center justify-center bg-gray-200'
            fallback.innerHTML = '<span class="text-gray-500 text-sm">Image failed to load</span>'
            e.target.parentNode.appendChild(fallback)
          }}
          onLoad={() => console.log('Image loaded successfully:', imageUrl)}
        />
        
        {/* Click to expand overlay */}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
          <div className="opacity-0 hover:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full p-2">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>

        {parsed.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 rounded z-10"
              onClick={(e) => {
                e.stopPropagation()
                setIndex((i) => clamp(i - 1))
              }}
            >
              ‹
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 rounded z-10"
              onClick={(e) => {
                e.stopPropagation()
                setIndex((i) => clamp(i + 1))
              }}
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeFullscreen}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
          >
            ✕
          </button>

          {/* Image Counter */}
          {parsed.length > 1 && (
            <div className="absolute top-4 left-4 text-white text-sm bg-black/50 px-3 py-1 rounded-full z-10">
              {index + 1} / {parsed.length}
            </div>
          )}

          {/* Main Image */}
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <img
              src={imageUrl}
              alt="service"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Navigation Arrows */}
          {parsed.length > 1 && (
            <>
              <button
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl px-3 py-1 rounded-full hover:bg-white/20 transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  setIndex((i) => clamp(i - 1))
                }}
              >
                ‹
              </button>
              <button
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl px-3 py-1 rounded-full hover:bg-white/20 transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  setIndex((i) => clamp(i + 1))
                }}
              >
                ›
              </button>
            </>
          )}

          {/* Thumbnail Strip */}
          {parsed.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {parsed.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation()
                    setIndex(idx)
                  }}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === index ? 'border-white' : 'border-white/50'
                  }`}
                >
                  <img
                    src={typeof img.url === 'string' ? img.url : img.url?.url || ''}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}


