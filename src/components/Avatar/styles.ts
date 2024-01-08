import { styled } from '@/styles/stitches.config'

export const StyledAvatar = styled('div', {
  width: 40,
  height: 40,
  borderRadius: '$full',
  background: '$gray200',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },
})
