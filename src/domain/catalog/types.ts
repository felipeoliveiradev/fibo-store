export type Category = 'all' | 'wear' | 'desk' | 'print'
export type ProductCategory = Exclude<Category, 'all'>

export type Product = {
  id: string
  name: string
  category: ProductCategory
  price: number
  compareAt?: number
  blurb: string
  detail: string
  material: string
  ship: string
  badge?: string
  accent: string
  ground: string
  mark: string
  sizes: string[]
}

export type SortBy = 'featured' | 'price-asc' | 'price-desc' | 'name'
export type GridMode = 'standard' | 'bento'

export type CategoryOption = {
  label: string
  value: Category
}
