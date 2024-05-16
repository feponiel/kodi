import styled, { css } from 'styled-components'

export const StyledSponsorSlider = styled.div`
  .swiper {
    display: flex;
    aspect-ratio: 16/9;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .swiper-wrapper {
      display: flex;
      flex-direction: row;
    }
  }
`

export const ProgressBar = styled.progress`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    height: 3px;
    background: none;

    &::-webkit-progress-bar {
      background-color: ${theme.colors.white};
    }

    &::-webkit-progress-value {
      background-color: ${theme.colors.accentColor};
    }
  `}
`
