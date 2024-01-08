import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss, theme } = createStitches({
  theme: {
    fonts: {
      default: 'Nunito, sans-serif',
    },

    space: {
      px: '1px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
    },

    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
    },

    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },

    colors: {
      'white': '#ffffff',
      'ice-white': '#edf4f5',

      'black': '#333',

      'pph100': '#ebeafd',
      'pph200': '#d9d8fc',
      'pph300': '#bcb9f9',
      'pph400': '#9992f3',
      'pph500': '#7765ed',
      'pph600': '#6445e2',
      'pph700': '#5433ce',
      'pph800': '#4b2db9',
      'pph900': '#3b248e',

      gray100: '#F8F9FC',
      gray200: '#E6E8F2',
      gray300: '#D1D6E4',
      gray400: '#8D95AF',
      gray500: '#303F73',
      gray600: '#252D4A',
      gray700: '#181C2A',
      gray800: '#0E1116',
    },

    radii: {
      xs: '2.5px',
      sm: '5px',
      md: '10px',
      lg: '20px',
      full: '99999px',
    },
  },
})
