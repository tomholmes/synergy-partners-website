import { useEffect } from 'react'
import PropTypes from 'prop-types'

function SEO({ 
  title, 
  description, 
  keywords = [], 
  image = '/og-image.jpg',
  url = window.location.href,
  type = 'website'
}) {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title
    }

    // Update meta tags
    const updateMetaTag = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = name
        document.head.appendChild(meta)
      }
      meta.content = content
    }

    const updatePropertyTag = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('property', property)
        document.head.appendChild(meta)
      }
      meta.content = content
    }

    // Basic meta tags
    if (description) {
      updateMetaTag('description', description)
    }

    if (keywords.length > 0) {
      updateMetaTag('keywords', keywords.join(', '))
    }

    // Open Graph tags
    if (title) {
      updatePropertyTag('og:title', title)
    }

    if (description) {
      updatePropertyTag('og:description', description)
    }

    if (image) {
      updatePropertyTag('og:image', image)
    }

    updatePropertyTag('og:url', url)
    updatePropertyTag('og:type', type)

    // Twitter Card tags
    if (title) {
      updatePropertyTag('twitter:title', title)
    }

    if (description) {
      updatePropertyTag('twitter:description', description)
    }

    if (image) {
      updatePropertyTag('twitter:image', image)
    }

    updatePropertyTag('twitter:card', 'summary_large_image')

    // Cleanup function
    return () => {
      // Reset title to default if needed
      // You could store the original title and restore it here
    }
  }, [title, description, keywords, image, url, type])

  // This component doesn't render anything
  return null
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.oneOf(['website', 'article', 'book', 'profile'])
}

export default SEO
