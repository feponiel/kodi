'use client'

import { GlobalStyle } from '@/styles/global'
import { lightTheme } from '@/styles/themes/lightTheme'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

interface ThemeProps {
  children: ReactNode
}

export function Theme({ children }: ThemeProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      {children}

      <GlobalStyle />
    </ThemeProvider>
  )
}
