import { productById } from '@/domain'
import type { Category, GridMode, ShipMethod, SortBy } from '@/domain'
import {
  cart,
  category,
  checkoutAddress,
  checkoutEmail,
  checkoutName,
  gridMode,
  newsletter,
  orderId,
  orderNote,
  productId,
  query,
  saleOnly,
  screen,
  selectedQty,
  selectedSize,
  shipMethod,
  sortBy,
} from './signals'

export function openCatalog() {
  screen.value = 'catalog'
  productId.value = null
}

export function openProduct(id: string) {
  const product = productById(id)
  if (!product) return
  productId.value = id
  selectedSize.value = product.sizes[0] ?? 'OS'
  selectedQty.value = 1
  screen.value = 'product'
}

export function openCart() {
  screen.value = 'cart'
}

export function openCheckout() {
  if (cart.value.length === 0) return
  screen.value = 'checkout'
}

export function setCategory(next: Category) {
  category.value = next
}

export function setQuery(value: string) {
  query.value = value
}

export function setSortBy(value: SortBy) {
  sortBy.value = value
}

export function setSaleOnly(value: boolean) {
  saleOnly.value = value
}

export function setGridMode(value: GridMode) {
  gridMode.value = value
}

export function setShipMethod(value: ShipMethod) {
  shipMethod.value = value
}

export function setSize(size: string) {
  selectedSize.value = size
}

export function setQty(qty: number) {
  selectedQty.value = Math.min(9, Math.max(1, qty))
}

export function bumpQty(delta: number) {
  setQty(selectedQty.value + delta)
}

function lineKey(id: string, size: string) {
  return `${id}::${size}`
}

export function addToCart() {
  const id = productId.value
  if (!id) return
  const size = selectedSize.value
  const qty = selectedQty.value
  const key = lineKey(id, size)
  const existing = cart.value.find((line) => line.key === key)
  if (existing) {
    cart.value = cart.value.map((line) =>
      line.key === key ? { ...line, qty: Math.min(9, line.qty + qty) } : line,
    )
  } else {
    cart.value = [...cart.value, { key, productId: id, size, qty }]
  }
}

export function setLineQty(key: string, qty: number) {
  if (qty < 1) {
    removeLine(key)
    return
  }
  cart.value = cart.value.map((line) =>
    line.key === key ? { ...line, qty: Math.min(9, qty) } : line,
  )
}

export function removeLine(key: string) {
  cart.value = cart.value.filter((line) => line.key !== key)
}

export function clearCart() {
  cart.value = []
}

export function placeOrder() {
  const name = checkoutName.value.trim()
  const email = checkoutEmail.value.trim()
  const address = checkoutAddress.value.trim()
  if (!name || !email || !address || cart.value.length === 0) return false
  orderId.value = `FB-${Date.now().toString(36).toUpperCase()}`
  cart.value = []
  screen.value = 'success'
  return true
}

export function resetShop() {
  checkoutName.value = ''
  checkoutEmail.value = ''
  checkoutAddress.value = ''
  orderNote.value = ''
  newsletter.value = true
  orderId.value = ''
  openCatalog()
}
