import styled, { css } from 'styled-components'

export const StyledMainSidebar = styled.aside`
  ${({ theme }) => css`
    grid-area: mainsidebar;
    display: flex;
    flex-direction: column;
    gap: ${theme.space[6]};
    height: 4000px;
    overflow: hidden;
  `}
`

export const AdContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.space[4]};
    aspect-ratio: 1/1;

    > * {
      width: 100%;
      height: 100%;
      background: ${theme.colors.gray300};
    }
  `}
`
