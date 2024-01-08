import { Title } from '@/styles/global'
import {
  TrendingCardCaption,
  TrendingCardFigure,
  TrendingCardWrapper,
} from './styles'
import Image from 'next/image'
import { useState } from 'react'
import { minimizeText } from '@/utils/minimizeText'

interface TrendingCardProps {
  goTo: string
  size: 'sm' | 'md'
  title: string
  image: {
    url: string
    alt: string
  }
}

export function TrendingCard({
  goTo,
  size,
  title: fullTitle,
  image,
}: TrendingCardProps) {
  const [isMouseIn, setMouseIn] = useState<boolean | undefined>()
  const minimalTitle = minimizeText(fullTitle, 60, '...')
  const title = isMouseIn ? fullTitle : minimalTitle

  function handleMousePosition() {
    isMouseIn ? setMouseIn(false) : setMouseIn(true)
  }

  return (
    <TrendingCardWrapper
      onMouseOver={handleMousePosition}
      onMouseOut={handleMousePosition}
      href={goTo}
    >
      <TrendingCardFigure>
        <Image src={image.url} alt={image.alt} width={300} height={300} />

        <TrendingCardCaption
          className={
            isMouseIn !== undefined
              ? isMouseIn
                ? 'turnGradientAnimationIn'
                : 'turnGradientAnimationOut'
              : ''
          }
        >
          <Title size={size}>{title}</Title>
        </TrendingCardCaption>
      </TrendingCardFigure>
    </TrendingCardWrapper>
  )
}
