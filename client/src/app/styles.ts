import { Container } from '@/styles/global'
import styled, { css } from 'styled-components'

export const HomeContainer = styled(Container)`
  ${({ theme }) => css`
    margin-top: calc(${theme.defaults.headerHeight} + ${theme.space[4]});
  `}
`

export const StyledHome = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-items: flex-start;
    grid-template-columns: 719px 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'trending mainsidebar' 'feed mainsidebar';
    gap: ${theme.space[8]};
  `}
`
