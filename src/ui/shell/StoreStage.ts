import { Column, Container } from 'fiboui/layout'
import { Box } from 'fiboui/structure'
import { ink } from '@/design'
import { CatalogView } from '@/ui/catalog/CatalogView'
import { CartView } from '@/ui/cart/CartView'
import { CheckoutView } from '@/ui/checkout/CheckoutView'
import { ProductView } from '@/ui/product/ProductView'
import { shopBanner } from '@/ui/catalog/ShopBanner'
import { shopBar } from '@/ui/catalog/ShopBar'
import { SuccessView } from '@/ui/checkout/SuccessView'
import { screen } from '@/application'

export function StoreStage() {
  return Column()
    .width('100%')
    .crossAxisAlignment('stretch')
    .bg(ink)
    .padding('0 0 72px')
    .children([
      Container()
        .width('100%')
        .maxWidth(1180)
        .padding('20px 16px 0')
        .lg({ padding: '28px 28px 0' })
        .css({ margin: '0 auto' })
        .children([
          Box()
            .width('100%')
            .bindSignal(screen)
            .children(() => [shell()]),
        ]),
    ])
}

function shell() {
  const catalog = screen.value === 'catalog'
  return Column()
    .width('100%')
    .crossAxisAlignment('stretch')
    .gap(catalog ? 28 : 20)
    .children([
      ...(catalog ? [shopBanner(), shopBar()] : []),
      stage(),
    ])
}

function stage() {
  switch (screen.value) {
    case 'product':
      return ProductView()
    case 'cart':
      return CartView()
    case 'checkout':
      return CheckoutView()
    case 'success':
      return SuccessView()
    case 'catalog':
    default:
      return CatalogView()
  }
}
