import { FiboStyles, MotionStyles } from 'fiboui/core'
import { Column } from 'fiboui/layout'
import { Box } from 'fiboui/structure'
import { chalk, face, ink, storeTheme } from '@/design'
import { StoreFooter } from './StoreFooter'
import { StoreHeader } from './StoreHeader'
import { StoreStage } from './StoreStage'

/** Root composition — shell + catalog system. */
export function StoreApp() {
  return Box()
    .position('relative')
    .width('100%')
    .minHeight('100vh')
    .boxSizing('border-box')
    .overflowX('hidden')
    .bg(ink)
    .color(chalk)
    .fontFamily(face)
    .theme(storeTheme)
    .className('shop-skin')
    .children([
      Column()
        .width('100%')
        .crossAxisAlignment('stretch')
        .bg(ink)
        .children([StoreHeader(), StoreStage(), StoreFooter()]),
      MotionStyles(),
      FiboStyles(),
    ])
}
