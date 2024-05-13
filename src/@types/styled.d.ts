import 'styled-components'
import { Theme } from '@/styles/themes/_theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
