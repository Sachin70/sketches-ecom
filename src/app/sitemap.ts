import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import productsData from '@/app/api/products/products-data'

const staticPaths = [
  '',
  '/shop',
  '/about',
  '/contact',
  '/faq',
  '/custom',
  '/privacy',
  '/terms',
  '/returns',
  '/login',
  '/register',
  '/forgot-password',
  '/wishlist',
  '/cart',
  '/checkout',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path || '/'}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))

  const productEntries: MetadataRoute.Sitemap = productsData.map((p) => ({
    url: `${base}/product/${p.id}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const customizeEntries: MetadataRoute.Sitemap = productsData.map((p) => ({
    url: `${base}/customize/${p.id}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...productEntries, ...customizeEntries]
}
