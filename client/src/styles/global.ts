import Image from 'next/image'
import styled, { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: ${theme.fonts.default};
    }

    body {
      background-color: ${theme.colors['ice-white']};
      color: ${theme.colors.black};
      -webkit-font-smoothing: antialiased;
    }

    input,
    button,
    textarea {
      appearance: none;
    }

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: ${theme.colors.gray100};
    }

    ::-webkit-scrollbar-thumb {
      ${({ theme }) => css`
        background: ${theme.colors.gray400};
        border-radius: ${theme.radius.xs};
      `}
    }
  `}
`

export const Container = styled.div`
  width: 1150px;
  margin: 0 auto;
  padding: 0 2%;

  /* '@responsive-desktop-hd': {
    padding: '0 $6',
  }, */
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

export const Avatar = styled(Image)`
  ${({ theme }) => css`
    background: ${theme.colors.gray200};
    border-radius: ${theme.radius.sm};
    overflow: hidden;
  `}
`

interface TitleProps {
  $level: 1 | 2 | 3 | 4 | 5 | 6
  $size?: 'xs' | 'sm' | 'md' | 'lg'
}

export const Title = styled.h1.attrs<TitleProps>(({ $level }) => ({
  as: `h${$level}`,
}))<TitleProps>`
  ${({ theme, $size = 'md' }) => css`
    font-family: ${theme.fonts.title};
    font-weight: ${theme.fontWeights.medium};
    line-height: 1.37;
    color: ${theme.colors.gray500};

    // VARIANTS
    ${$size === 'xs' &&
    css`
      font-size: ${theme.fontSizes.sm};
    `}

    ${$size === 'sm' &&
    css`
      font-size: ${theme.fontSizes.md};
    `}

    ${$size === 'md' &&
    css`
      font-size: ${theme.fontSizes.xl};
    `}

    ${$size === 'lg' &&
    css`
      font-size: ${theme.fontSizes['3xl']};
    `}
  `}
`
