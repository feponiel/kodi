import styled, { css } from 'styled-components'

export const StyledHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: center;
    height: ${theme.defaults.headerHeight};
    position: fixed;
    top: 0;
    left: 0;
    background: ${theme.colors.white};
    z-index: 9999;

    .header-container {
      display: flex;
      align-items: center;
      gap: ${theme.space[5]};
    }
  `}
`
