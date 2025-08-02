// Utility functions for the James Pratt Conductor website

// Format date for display
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}

// Format duration for media items
export const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  
  if (hours > 0) {
    return `${hours}h ${mins}m`
  }
  return `${mins} minutes`
}

// Generate email subject line for contact
export const generateEmailSubject = (inquiryType) => {
  return `Professional Inquiry: ${inquiryType} - James Pratt Conductor`
}

// Validate email format
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Smooth scroll to element
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Generate repertoire categories for filtering
export const getRepertoireCategories = () => {
  return [
    'All',
    'Choral-Orchestral',
    'Opera',
    'Symphony',
    'Chamber',
    'Contemporary'
  ]
}

// Format phone number for display
export const formatPhoneNumber = (phone) => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '')
  
  // Format as Australian phone number
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)} ${cleaned.slice(6)}`
  }
  
  return phone
}

// Check if media item is video
export const isVideoFile = (filename) => {
  const videoExtensions = ['.mp4', '.mov', '.avi', '.webm']
  return videoExtensions.some(ext => filename.toLowerCase().endsWith(ext))
}

// Check if media item is audio
export const isAudioFile = (filename) => {
  const audioExtensions = ['.mp3', '.wav', '.flac', '.aac']
  return audioExtensions.some(ext => filename.toLowerCase().endsWith(ext))
}

// Generate social media share URLs
export const generateShareUrl = (platform, url, title) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  
  switch (platform) {
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    default:
      return url
  }
}

// Debounce function for search and input fields
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Check if element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Load image with loading placeholder
export const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}
