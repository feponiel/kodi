import { globalCss, styled } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'IBM Plex Sans',
  },

  body: {
    backgroundColor: '$ice-white',
    color: '$black',
    '-webkit-font-smoothing': 'antialiased',
  },

  'input, button, textarea': {
    appearance: 'none',
  },
})

export const Container = styled('div', {
  width: '1100px',
  margin: '0 auto',
  padding: '0 2%',
})

export const Overlay = styled('div', {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
})

export const Title = styled('h1', {
  fontFamily: 'DM Sans',
  fontWeight: '$bold',

  variants: {
    size: {
      sm: {
        fontSize: '1rem',
      },

      md: {
        fontSize: '2rem',
      },

      lg: {
        fontSize: '3rem',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
