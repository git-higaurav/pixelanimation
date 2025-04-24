import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/_dashboard/', '/api/'],
    },
    sitemap: 'https://pixelanimation.com/sitemap.xml',
  }
} 