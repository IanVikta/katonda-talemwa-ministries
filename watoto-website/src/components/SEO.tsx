import { useEffect } from 'react'

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonicalPath?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  robots?: string
  jsonLd?: Record<string, any>
}

const DEFAULT_TITLE = 'Katonda Talemwa Ministries | Uganda'
const DEFAULT_DESCRIPTION =
  "Katonda Talemwa Ministries is a Christian ministry in Kyasenya, Lwengo, Uganda, demonstrating the Father's love in action through orphan care, family villages, baby rescue, education, and community churches."
const BASE_URL = 'https://katondatalemwaministries.org'
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`
const DEFAULT_ROBOTS = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'

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

function computeTitle(title?: string): string {
  if (!title) return DEFAULT_TITLE
  // Avoid duplicate brand suffix if already present
  if (title.includes('Katonda Talemwa')) {
    return title
  }
  return `${title} | Katonda Talemwa Ministries`
}

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonicalPath = '',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  robots = DEFAULT_ROBOTS,
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // 1. Page Title
    const fullTitle = computeTitle(title)
    document.title = fullTitle

    // 2. Standard Meta Tags
    setMetaTag('meta[name="title"]', 'content', fullTitle)
    setMetaTag('meta[name="description"]', 'content', description)
    setMetaTag('meta[name="robots"]', 'content', robots)
    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'content', keywords)
    }

    // 3. Canonical Link
    const normalizedPath = canonicalPath.startsWith('/')
      ? canonicalPath === '/' ? '' : canonicalPath
      : canonicalPath ? `/${canonicalPath}` : ''
    const fullUrl = `${BASE_URL}${normalizedPath || '/'}`
    setCanonical(fullUrl)

    // 4. Open Graph Tags
    setMetaTag('meta[property="og:type"]', 'content', ogType)
    setMetaTag('meta[property="og:site_name"]', 'content', 'Katonda Talemwa Ministries')
    setMetaTag('meta[property="og:title"]', 'content', fullTitle)
    setMetaTag('meta[property="og:description"]', 'content', description)
    setMetaTag('meta[property="og:url"]', 'content', fullUrl)
    setMetaTag('meta[property="og:image"]', 'content', ogImage)

    // 5. Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image')
    setMetaTag('meta[name="twitter:site"]', 'content', '@parental_care')
    setMetaTag('meta[name="twitter:title"]', 'content', fullTitle)
    setMetaTag('meta[name="twitter:description"]', 'content', description)
    setMetaTag('meta[name="twitter:url"]', 'content', fullUrl)
    setMetaTag('meta[name="twitter:image"]', 'content', ogImage)

    // 6. Optional Dynamic Schema.org JSON-LD
    let scriptTag: HTMLScriptElement | null = null
    const scriptId = 'page-specific-jsonld'
    const existingScript = document.getElementById(scriptId)
    if (existingScript) {
      existingScript.remove()
    }

    if (jsonLd) {
      scriptTag = document.createElement('script')
      scriptTag.id = scriptId
      scriptTag.type = 'application/ld+json'
      scriptTag.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(scriptTag)
    }

    return () => {
      const el = document.getElementById(scriptId)
      if (el) el.remove()
    }
  }, [title, description, keywords, canonicalPath, ogImage, ogType, robots, jsonLd])

  return null
}
