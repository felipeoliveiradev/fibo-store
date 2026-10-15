import { freeShipFrom, productById, products } from '@/domain'
import {
  cart,
  category,
  query,
  saleOnly,
  shipMethod,
  sortBy,
} from './signals'

export function cartCount() {
  return cart.value.reduce((sum, line) => sum + line.qty, 0)
}

export function cartTotal() {
  return cart.value.reduce((sum, line) => {
    const product = productById(line.productId)
    return sum + (product?.price ?? 0) * line.qty
  }, 0)
}

export function shippingCost() {
  if (cartTotal() >= freeShipFrom) return 0
  return shipMethod.value === 'express' ? 18 : 8
}

export function catalogProducts() {
  const q = query.value.trim().toLowerCase()
  const cat = category.value
  let list = products.filter((item) => {
    if (cat !== 'all' && item.category !== cat) return false
    if (saleOnly.value && !item.compareAt) return false
    if (!q) return true
    return (
      item.name.toLowerCase().includes(q) ||
      item.blurb.toLowerCase().includes(q) ||
      item.category.includes(q)
    )
  })

  switch (sortBy.value) {
    case 'price-asc':
      list = [...list].sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      list = [...list].sort((a, b) => b.price - a.price)
      break
    case 'name':
      list = [...list].sort((a, b) => a.name.localeCompare(b.name))
      break
    default:
      break
  }
  return list
}
