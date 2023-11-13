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
})

export const Container = styled('div', {
  width: '1280px',
  margin: '0 auto',
  padding: '0 2%',
})
