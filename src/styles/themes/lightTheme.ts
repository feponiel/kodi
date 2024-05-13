import { Theme } from './_theme'

export const lightTheme: Theme = {
  defaults: {
    headerHeight: '75px',
  },

  fonts: {
    default: 'var(--font-roboto)',
    title: 'var(--font-poppins)',
  },

  fontSizes: {
    xxs: '0.6875rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
  },

  fontWeights: {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },

  lineHeights: {
    shorter: '125%',
    short: '140%',
    base: '160%',
    tall: '180%',
  },

  colors: {
    white: '#ffffff',
    'ice-white': '#e3eaee',

    black: '#121212',

    accentColor: '#6445e2',
    accentColorLight: '#bcb9f9',

    gray100: '#F8F9FC',
    gray200: '#E6E8F2',
    gray300: '#D1D6E4',
    gray400: '#8D95AF',
    gray500: '#303F73',
    gray600: '#252D4A',
    gray700: '#181C2A',
    gray800: '#0E1116',
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
    9: '2.25rem',
    10: '2.5rem',
  },

  radius: {
    xs: '2.5px',
    sm: '5px',
    md: '10px',
    lg: '20px',
    full: '9999px',
  },
}
