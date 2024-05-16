import Link from 'next/link'
import styled, { css, keyframes } from 'styled-components'

const cardGradientAnimationIn = keyframes`
  from { top: 25% };
  to { top: 0 };
`

const cardGradientAnimationOut = keyframes`
  from { top: 0 };
  to { top: 25% };
`

export const TrendingCardWrapper = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  text-decoration: none;
  overflow: hidden;
  position: relative;

  &::before {
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`

interface TrendingCardMainCategoryProps {
  size: 'sm' | 'lg'
}

export const TrendingCardMainCategory = styled.span<TrendingCardMainCategoryProps>`
  ${({ theme, size }) => css`
    display: inline-block;
    margin-bottom: ${theme.space[2]};
    padding: ${theme.space[1]} ${theme.space[2]};
    color: ${theme.colors.white};
    background: ${theme.colors.accentColor};
    border-radius: ${theme.radius.xs};

    // VARIANTS
    ${size === 'sm' &&
    css`
      font-size: ${theme.fontSizes.xxs};
    `}

    ${size === 'lg' &&
    css`
      font-size: ${theme.fontSizes.sm};
    `}
  `}
`

export const TrendingCardFigure = styled.figure`
  ${({ theme }) => css`
    img {
      width: 100%;
      height: 100%;
    }

    &::before {
      width: 100%;
      height: 100%;
      content: '';
      position: absolute;
      top: 25%;
      left: 0;
      z-index: 0;
      background: linear-gradient(
        to top,
        ${theme.colors.black} 0%,
        transparent 100%
      );
    }

    &.turnGradientAnimationIn::before {
      animation: ${cardGradientAnimationIn} 0.5s forwards;
    }

    &.turnGradientAnimationOut::before {
      animation: ${cardGradientAnimationOut} 0.25s forwards;
    }
  `}
`

export const TrendingCardCaption = styled.figcaption`
  ${({ theme }) => css`
    margin: 5.75% 3.75%;
    position: absolute;
    bottom: 0;
    left: 0;

    h3 {
      color: ${theme.colors.white};
      z-index: 1;
    },
  `}
`

interface TrendingCardCallToActionProps {
  size: 'sm' | 'lg'
}

export const TrendingCardCallToAction = styled.p<TrendingCardCallToActionProps>`
  ${({ theme, size }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.space[1]};
    margin-top: 4%;
    color: ${theme.colors.gray200};

    // VARIANTS
    ${size === 'sm' &&
    css`
      font-size: ${theme.fontSizes.sm};
    `}

    ${size === 'lg' &&
    css`
      font-size: ${theme.fontSizes.xl};
    `}
  `}
`
