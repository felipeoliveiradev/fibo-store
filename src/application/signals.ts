import { signal } from 'fiboui/core'
import type { CartLine, Category, GridMode, ShipMethod, ShopScreen, SortBy } from '@/domain'

/** Navigation */
export const screen = signal<ShopScreen>('catalog')
export const productId = signal<string | null>(null)

/** Catalog filters */
export const category = signal<Category>('all')
export const query = signal('')
export const sortBy = signal<SortBy>('featured')
export const saleOnly = signal(false)
export const gridMode = signal<GridMode>('standard')

/** Cart + PDP */
export const cart = signal<CartLine[]>([])
export const selectedSize = signal('M')
export const selectedQty = signal(1)

/** Checkout — do not bindSignal these on parents that remount TextFields */
export const shipMethod = signal<ShipMethod>('standard')
export const checkoutName = signal('')
export const checkoutEmail = signal('')
export const checkoutAddress = signal('')
export const orderNote = signal('')
export const newsletter = signal(true)
export const orderId = signal('')
