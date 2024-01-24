import { keyframes, styled } from '@/styles/stitches.config'
import Link from 'next/link'

const cardGradientAnimationIn = keyframes({
  from: { top: '25%' },
  to: { top: 0 },
})

const cardGradientAnimationOut = keyframes({
  from: { top: 0 },
  to: { top: '25%' },
})

export const TrendingCardWrapper = styled(Link, {
  display: 'flex',
  textDecoration: 'none',
  overflow: 'hidden',
  position: 'relative',

  // to prevent hover conflict
  '&::before': {
    width: '100%',
    height: '100%',
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
})

export const TrendingCardFigure = styled('figure', {
  img: {
    width: '100%',
    height: '100%',
  },

  '&::before': {
    width: '100%',
    height: '100%',
    content: '',
    position: 'absolute',
    top: '25%',
    left: 0,
    zIndex: 0,
    background: 'linear-gradient(to top, $black 0%, transparent 100%)',
  },

  '&.turnGradientAnimationIn::before': {
    animation: `${cardGradientAnimationIn} 0.5s forwards`,
  },

  '&.turnGradientAnimationOut::before': {
    animation: `${cardGradientAnimationOut} 0.25s forwards`,
  },
})

export const TrendingCardCaption = styled('figcaption', {
  position: 'absolute',
  bottom: 8,
  left: 0,
  padding: '$3',

  h1: {
    color: '$white',
    zIndex: 1,
  },
})

export const TrendCardCallToAction = styled('p', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  marginTop: '$2',
  color: '$gray200',

  variants: {
    size: {
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: '$xl',
      },
    },
  },
})
