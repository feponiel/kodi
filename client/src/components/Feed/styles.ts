import styled, { css } from 'styled-components'

export const StyledFeed = styled.section`
  grid-area: feed;

  ${({ theme }) => css`
    h2 {
      padding: ${theme.space[5]} ${theme.space[5]} 0;
      color: ${theme.colors.gray400};
      background: ${theme.colors.white};

      &::after {
        display: block;
        content: '';
        width: 100%;
        height: 0.5px;
        background: ${theme.colors.gray400};
        position: relative;
        bottom: -4px;
      }
    }
  `}
`

export const FeedArticlesWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${theme.space.px};
  `}
`
