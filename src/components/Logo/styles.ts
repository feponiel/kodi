import styled, { css } from 'styled-components'

export const LogoColorThemeFill = styled.path`
  ${({ theme }) => css`
    fill: ${theme.colors.accentColor};
  `}
`
