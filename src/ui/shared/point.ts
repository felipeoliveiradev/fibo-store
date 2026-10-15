import type { PseudoStateBuilder } from 'fiboui/core'
import { pink } from '@/design'

type Pressable = {
  cursor(value: string): Pressable
  focus(fn: (state: PseudoStateBuilder) => void): Pressable
}

/** Keyboard-focus ring for pressable builders. */
export function point<T extends Pressable>(node: T): T {
  return node
    .cursor('pointer')
    .focus((state: PseudoStateBuilder) => {
      state.css('outline', `2px solid ${pink}`)
      state.css('outline-offset', '2px')
    }) as T
}
