import { Title } from '@/styles/global'
import {
  TrendingCardCallToAction,
  TrendingCardCaption,
  TrendingCardFigure,
  TrendingCardMainCategory,
  TrendingCardWrapper,
} from './styles'
import Image from 'next/image'
import { useState } from 'react'
import { match } from 'ts-pattern'
import { ArrowSquareUpRight } from '@phosphor-icons/react'

interface TrendingCardProps {
  redirectTo: string
  title: string
  mainCategory: string
  image: {
    url: string
    alt: string
  }
  rankPosition: number
}

export function TrendingCard({
  redirectTo,
  title,
  mainCategory,
  image,
  rankPosition,
}: TrendingCardProps) {
  const [isMouseIn, setMouseIn] = useState<boolean>(false)
  const contentSize = rankPosition === 1 ? 'lg' : 'sm'

  return (
    <TrendingCardWrapper
      className={`top-${rankPosition}`}
      onMouseOver={() => setMouseIn(true)}
      onMouseOut={() => setMouseIn(false)}
      href={redirectTo}
    >
      <TrendingCardFigure
        className={match(isMouseIn)
          .with(true, () => 'turnGradientAnimationIn')
          .with(false, () => 'turnGradientAnimationOut')
          .otherwise(() => '')}
      >
        <Image src={image.url} alt={image.alt} width={300} height={300} />

        <TrendingCardCaption>
          <TrendingCardMainCategory size={contentSize}>
            {mainCategory}
          </TrendingCardMainCategory>

          <Title $level={3} $size={contentSize}>
            {title}
          </Title>

          <TrendingCardCallToAction size={contentSize}>
            <ArrowSquareUpRight />
            Ler artigo
          </TrendingCardCallToAction>
        </TrendingCardCaption>
      </TrendingCardFigure>
    </TrendingCardWrapper>
  )
}
