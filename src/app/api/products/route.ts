import { NextResponse } from 'next/server'
import { ProductListResponse } from '@/types/product'
import productsData from './products-data'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category') || undefined
    const collection = searchParams.get('collection') || undefined
    const featured = searchParams.get('featured') === 'true' ? true : undefined
    const search = searchParams.get('search') || undefined
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!, 10) : undefined
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')!, 10) : undefined

    let filtered = [...productsData]

    if (category && category !== 'all') {
      filtered = filtered.filter((p) => p.category === category)
    }

    if (collection && collection !== 'all') {
      filtered = filtered.filter((p) => p.collection === collection)
    }

    if (featured !== undefined) {
      filtered = filtered.filter((p) => p.featured === featured)
    }

    if (search) {
      const searchLower = search.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower) ||
          p.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      )
    }

    const pageNum = page || 1
    const limitNum = limit || 50
    const start = (pageNum - 1) * limitNum
    const end = start + limitNum

    const result: ProductListResponse = {
      products: filtered.slice(start, end),
      total: filtered.length,
      page: pageNum,
      limit: limitNum,
    }

    await new Promise((resolve) => setTimeout(resolve, 200))

    return NextResponse.json(result)
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}
