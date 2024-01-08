import { styled } from '@/styles/stitches.config'
import { keyframes } from '@stitches/react'
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
})

export const TrendingCardFigure = styled('figure', {
  position: 'relative',
  overflow: 'hidden',
  transition: '2s',

  img: {
    width: '100%',
    height: '100%',
  },
})

export const TrendingCardCaption = styled('figcaption', {
  h1: {
    color: '$white',
    display: 'flex',
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    padding: '$4',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
  },

  '&::before': {
    width: '100%',
    height: '100%',
    content: '',
    position: 'absolute',
    top: '25%',
    left: 0,
    zIndex: 1,
    background: 'linear-gradient(to top, $black 20%, transparent 100%)',
  },

  '&.turnGradientAnimationIn::before': {
    animation: `${cardGradientAnimationIn} 0.5s forwards`,
  },

  '&.turnGradientAnimationOut::before': {
    animation: `${cardGradientAnimationOut} 0.20s forwards`,
  },
})
