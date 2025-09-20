import { supabase } from '../lib/supabaseClient'

// Generate a deterministic storage path: service-images/{hostId}/{stamp}/{fileName}
export const generateFilePath = ({ hostId, stamp, fileName }) => {
  const safeName = fileName.replace(/[^a-zA-Z0-9_.-]/g, '_')
  return `${hostId}/${stamp}/${Date.now()}_${safeName}`
}

export const getPublicUrl = (bucket, path) => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path)
  return data?.publicUrl || null
}

// Upload an array of File objects to a bucket. Returns array of { path, url }
export const uploadImages = async ({ files, bucket = 'service-images', hostId }) => {
  if (!hostId) {
    throw new Error('Host ID is required for upload')
  }
  
  const stamp = Date.now().toString()
  const results = []
  
  for (const file of files) {
    try {
      console.log('Uploading file:', file.name, 'Size:', file.size, 'Type:', file.type)
      const path = generateFilePath({ hostId, stamp, fileName: file.name })
      console.log('Generated path:', path)
      
      const { data, error } = await supabase.storage.from(bucket).upload(path, file, {
        cacheControl: '3600',
        upsert: false,
        contentType: file.type || 'image/jpeg',
      })
      
      if (error) {
        console.error('Upload error for', file.name, ':', error)
        throw new Error(`Failed to upload ${file.name}: ${error.message}`)
      }
      
      console.log('Upload successful for', file.name, ':', data)
      const url = getPublicUrl(bucket, path)
      console.log('Generated URL:', url)
      results.push({ path, url })
    } catch (error) {
      console.error('Error uploading file', file.name, ':', error)
      throw error
    }
  }
  
  console.log('All uploads completed:', results)
  return results
}

// Accepts DB "images" value as string[] or object[] and returns uniform array of { url, path? }
export const parseServiceImages = (images) => {
  if (!images) return []
  try {
    const val = Array.isArray(images) ? images : JSON.parse(images)
    return val.map((it) => {
      if (typeof it === 'string') {
        // Check if it's a stringified JSON object
        try {
          const parsed = JSON.parse(it)
          if (parsed.url && typeof parsed.url === 'string') {
            return { url: parsed.url, path: parsed.path }
          }
        } catch {
          // Not JSON, treat as URL string
          return { url: it }
        }
        return { url: it }
      } else if (it && typeof it === 'object') {
        // Handle case where it might be nested or have different structure
        if (it.url && typeof it.url === 'string') {
          return { url: it.url, path: it.path }
        } else if (it.path && typeof it.path === 'string') {
          // If it's just a path, construct the URL
          return { url: it.path, path: it.path }
        } else if (typeof it === 'object' && it.url && typeof it.url === 'object') {
          // Handle nested object case where it.url is itself an object
          return { url: it.url.url || it.url, path: it.url.path || it.path }
        }
        return it
      }
      return it
    })
  } catch {
    return []
  }
}

// Delete images from storage if paths exist
export const cleanupServiceImages = async (images, bucket = 'service-images') => {
  const paths = (images || [])
    .map((it) => (typeof it === 'string' ? null : it.path))
    .filter(Boolean)
  if (paths.length === 0) return { error: null }
  const { error } = await supabase.storage.from(bucket).remove(paths)
  return { error: error?.message || null }
}


