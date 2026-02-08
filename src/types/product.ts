export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  category: 'women' | 'girls'
  collection: 'evening' | 'casual' | 'formal' | 'contemporary' | 'bridal'
  images: string[]
  description: string
  designType: 'digital' | 'print' | 'both'
  format: string[]
  designer: {
    name: string
    bio: string
    experience: string
  }
  details: {
    designStyle: string
    complexity: 'simple' | 'moderate' | 'complex'
    estimatedTime: string
    fileFormats: string[]
    resolution: string
    customization: string
    license: string
  }
  sizes: string[]
  colorOptions: string[]
  highlights: string[]
  tags: string[]
  inStock: boolean
  featured: boolean
  createdAt: string
  updatedAt: string
  similarProducts: number[]
}

export interface ProductListResponse {
  products: Product[]
  total: number
  page: number
  limit: number
}

export interface ProductResponse {
  product: Product
}




