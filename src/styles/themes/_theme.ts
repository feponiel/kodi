export interface Theme {
  defaults: {
    headerHeight: string
  }

  fonts: {
    default: string
    title: string
  }

  fontSizes: {
    xxs: '0.6875rem'
    xs: '0.75rem'
    sm: '0.875rem'
    md: '1rem'
    lg: '1.125rem'
    xl: '1.25rem'
    '2xl': '1.5rem'
    '3xl': '2rem'
  }

  fontWeights: {
    regular: '400'
    medium: '500'
    semiBold: '600'
    bold: '700'
  }

  lineHeights: {
    shorter: '125%'
    short: '140%'
    base: '160%'
    tall: '180%'
  }

  colors: {
    white: string
    'ice-white': string

    black: string

    accentColor: string
    accentColorLight: string

    gray100: string
    gray200: string
    gray300: string
    gray400: string
    gray500: string
    gray600: string
    gray700: string
    gray800: string
  }

  space: {
    px: '1px'
    1: '0.25rem'
    2: '0.5rem'
    3: '0.75rem'
    4: '1rem'
    5: '1.25rem'
    6: '1.5rem'
    7: '1.75rem'
    8: '2rem'
    9: '2.25rem'
    10: '2.5rem'
  }

  radius: {
    xs: '2.5px'
    sm: '5px'
    md: '10px'
    lg: '20px'
    full: '9999px'
  }
}
