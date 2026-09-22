import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonicalPath?: string
  ogImage?: string
}

const DEFAULT_TITLE = 'Katonda Talemwa Ministries | Transforming Lives, Restoring Hope in Uganda'
const DEFAULT_DESCRIPTION =
  'Katonda Talemwa Ministries is a Christian charity in Kyasenya, Lwengo, Uganda, dedicated to rescuing vulnerable orphans, providing education, medical care, child sponsorship, and community transformation.'
const BASE_URL = 'https://katondatalemwaministries.org'

function setMetaTag(selector: string, attr: string, value: string) {
  let element = document.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    if (selector.startsWith('meta[name=')) {
      const name = selector.match(/name="([^"]+)"/)?.[1]
      if (name) element.setAttribute('name', name)
    } else if (selector.startsWith('meta[property=')) {
      const prop = selector.match(/property="([^"]+)"/)?.[1]
      if (prop) element.setAttribute('property', prop)
    }
    document.head.appendChild(element)
  }
  element.setAttribute(attr, value)
}

function setCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonicalPath = '',
  ogImage = `${BASE_URL}/favicon.png`
}: SEOProps) {
  useEffect(() => {
    // 1. Page Title
    const fullTitle = title ? `${title} | Katonda Talemwa Ministries` : DEFAULT_TITLE
    document.title = fullTitle

    // 2. Primary Meta Tags
    setMetaTag('meta[name="title"]', 'content', fullTitle)
    setMetaTag('meta[name="description"]', 'content', description)
    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'content', keywords)
    }

    // 3. Canonical Link
    const fullUrl = `${BASE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`
    setCanonical(fullUrl)

    // 4. Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'content', fullTitle)
    setMetaTag('meta[property="og:description"]', 'content', description)
    setMetaTag('meta[property="og:url"]', 'content', fullUrl)
    setMetaTag('meta[property="og:image"]', 'content', ogImage)

    // 5. Twitter Card Tags
    setMetaTag('meta[name="twitter:title"]', 'content', fullTitle)
    setMetaTag('meta[name="twitter:description"]', 'content', description)
    setMetaTag('meta[name="twitter:url"]', 'content', fullUrl)
    setMetaTag('meta[name="twitter:image"]', 'content', ogImage)
  }, [title, description, keywords, canonicalPath, ogImage])

  return null
}
