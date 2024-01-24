import { Title } from '@/styles/global'
import {
  TrendCardCallToAction,
  TrendingCardCaption,
  TrendingCardFigure,
  TrendingCardWrapper,
} from './styles'
import Image from 'next/image'
import { useState } from 'react'
import { match } from 'ts-pattern'
import { ArrowRight } from '@phosphor-icons/react'

interface TrendingCardProps {
  goTo: string
  size: 'sm' | 'md'
  title: string
  image: {
    url: string
    alt: string
  }
}

export function TrendingCard({ goTo, size, title, image }: TrendingCardProps) {
  const [isMouseIn, setMouseIn] = useState<boolean>(false)

  return (
    <TrendingCardWrapper
      onMouseOver={() => setMouseIn(true)}
      onMouseOut={() => setMouseIn(false)}
      href={goTo}
    >
      <TrendingCardFigure
        className={match(isMouseIn)
          .with(true, () => 'turnGradientAnimationIn')
          .with(false, () => 'turnGradientAnimationOut')
          .otherwise(() => '')}
      >
        <Image src={image.url} alt={image.alt} width={300} height={300} />

        <TrendingCardCaption>
          <Title size={size}>{title}</Title>
          <TrendCardCallToAction size={size}>
            Ler artigo
            <ArrowRight />
          </TrendCardCallToAction>
        </TrendingCardCaption>
      </TrendingCardFigure>
    </TrendingCardWrapper>
  )
}
