import { extendTheme, noirTheme } from 'fiboui/theme'
import { chalk, face, ink, lime, pink, red } from './tokens'

export const storeColors = {
  primary: lime,
  onPrimary: '#000000',
  secondary: pink,
  onSecondary: chalk,
  background: ink,
  onBackground: chalk,
  surface: '#141414',
  onSurface: chalk,
  error: red,
} as const

export const storeTheme = extendTheme(noirTheme, {
  name: 'fibo-store',
  colors: storeColors,
  fontFamily: face,
})
