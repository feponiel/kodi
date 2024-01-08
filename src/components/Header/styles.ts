import { styled } from '@/styles/stitches.config'

export const StyledHeader = styled('header', {
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  padding: '$5 0',
  background: '$white',
  zIndex: 9999,

  '.header-container': {
    display: 'flex',
    alignItems: 'center',
    gap: '$5',
  },
})
