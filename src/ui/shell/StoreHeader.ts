import type { PseudoStateBuilder } from 'fiboui/core'
import { Column, Header, Row } from 'fiboui/layout'
import { Box } from 'fiboui/structure'
import { Text } from 'fiboui/content'
import { Button } from 'fiboui/interactive'
import { chalk, lime, line, muted, pink } from '@/design'
import { cart, cartCount, openCart, openCatalog, screen } from '@/application'
import { point } from '@/ui/shared/point'

export function StoreHeader() {
  return Header()
    .sticky(true)
    .height(60)
    .width('100%')
    .bg('#000000')
    .borderBottom(line)
    .padding('0 16px')
    .lg({ padding: '0 28px' })
    .css({ backdropFilter: 'none', borderColor: 'rgba(255,255,255,0.16)' })
    .children([
      Row()
        .width('100%')
        .height('100%')
        .crossAxisAlignment('center')
        .children([
          point(
            Button('')
              .variant('raw')
              .height(40)
              .padding('0 4px')
              .bg('transparent')
              .justifyContent('flex-start')
              .alignItems('center')
              .hover((state: PseudoStateBuilder) => {
                state.opacity(0.75)
              })
              .onPress(() => openCatalog()),
          ).children([
            Row()
              .hug()
              .gap(10)
              .crossAxisAlignment('center')
              .children([
                brandMark(),
                Column()
                  .gap(0)
                  .crossAxisAlignment('start')
                  .children([
                    Text('Fibo Store')
                      .fontSize(12)
                      .fontWeight(800)
                      .letterSpacing('0.1em')
                      .textTransform('uppercase')
                      .color(chalk),
                    Text('by FiboUI')
                      .fontSize(8)
                      .letterSpacing('0.12em')
                      .textTransform('uppercase')
                      .color(muted),
                  ]),
              ]),
          ]),
          Box().flex('1'),
          Row()
            .hug()
            .gap(8)
            .crossAxisAlignment('center')
            .children([
              point(
                Button('Shop')
                  .variant('raw')
                  .height(36)
                  .padding('0 14px')
                  .borderRadius('0')
                  .fontSize(10)
                  .fontWeight(800)
                  .letterSpacing('0.12em')
                  .textTransform('uppercase')
                  .bg('transparent')
                  .color(chalk)
                  .hover((state: PseudoStateBuilder) => {
                    state.color(pink)
                  })
                  .onPress(() => openCatalog()),
              ),
              Box().bindSignal(cart).bindSignal(screen).children(() => [cartChip()]),
            ]),
        ]),
    ])
}

function brandMark() {
  return Row()
    .gap(1)
    .hug()
    .children([
      Box().width(8).height(8).bg(pink),
      Box().width(8).height(8).bg(lime),
      Box().width(8).height(8).bg(chalk),
      Box().width(8).height(8).bg('#3b82f6'),
    ])
}

function cartChip() {
  const count = cartCount()
  return point(
    Button(count > 0 ? `Bag · ${count}` : 'Bag')
      .variant('raw')
      .height(36)
      .padding('0 14px')
      .borderRadius('0')
      .fontSize(10)
      .fontWeight(800)
      .letterSpacing('0.12em')
      .textTransform('uppercase')
      .bg(count > 0 ? pink : 'transparent')
      .color(chalk)
      .border(count > 0 ? `1px solid ${pink}` : line)
      .hover((state: PseudoStateBuilder) => {
        state.bg(count > 0 ? '#ffffff' : 'rgba(255,45,138,0.2)').color(count > 0 ? '#000000' : chalk)
      })
      .pressEffect('shrink')
      .onPress(() => openCart()),
  )
}
