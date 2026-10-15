import type { PseudoStateBuilder } from 'fiboui/core'
import { Column, Row } from 'fiboui/layout'
import { Box } from 'fiboui/structure'
import { Text } from 'fiboui/content'
import { Button } from 'fiboui/interactive'
import { chalk, line, muted } from '@/design'
import { openCatalog } from '@/application'
import { point } from '@/ui/shared/point'

export function StoreFooter() {
  const year = new Date().getFullYear()
  return Column()
    .width('100%')
    .crossAxisAlignment('stretch')
    .borderTop(line)
    .bg('#000000')
    .children([
      Box()
        .display('grid')
        .width('100%')
        .minWidth(0)
        .css({ gridTemplateColumns: '1fr' })
        .md({ gridTemplateColumns: '1fr 1fr 1fr' })
        .children([
          footBlock('Help', 'Shipping · Returns · Size guide'),
          footBlock('Store', 'Wear · Desk · Print'),
          footBlock('FiboUI', 'Fluent builders. No JSX.'),
        ]),
      Row()
        .width('100%')
        .mainAxisAlignment('spaceBetween')
        .crossAxisAlignment('center')
        .padding('16px')
        .borderTop(line)
        .flexWrap('wrap')
        .gap(12)
        .lg({ padding: '18px 28px' })
        .children([
          Text(`© ${year} Fibo Store`)
            .fontSize(9)
            .letterSpacing('0.14em')
            .textTransform('uppercase')
            .color(muted),
          point(
            Button('Continue shopping')
              .variant('raw')
              .padding('0')
              .bg('transparent')
              .fontSize(9)
              .letterSpacing('0.12em')
              .textTransform('uppercase')
              .color(muted)
              .hover((state: PseudoStateBuilder) => {
                state.color(chalk)
              })
              .onPress(() => openCatalog()),
          ),
        ]),
    ])
}

function footBlock(title: string, body: string) {
  return Column()
    .width('100%')
    .gap(8)
    .padding('22px 16px')
    .css({ borderBottom: line })
    .md({ borderBottom: 'none', borderRight: line, padding: '28px' })
    .children([
      Text(title)
        .fontSize(10)
        .fontWeight(800)
        .letterSpacing('0.14em')
        .textTransform('uppercase')
        .color(chalk),
      Text(body).fontSize(12).lineHeight(1.4).color(muted),
    ])
}
