import Image from 'next/image'
import styled, { css } from 'styled-components'

export const StyledArticleOverview = styled.li`
  ${({ theme }) => css`
    a {
      display: flex;
      align-items: center;
      gap: ${theme.space[2]};
      text-decoration: none;
      color: initial;
    }

    h3 {
      font-weight: ${theme.fontWeights.semiBold};
    }
  `}
`

export const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const ArticleThumbnail = styled(Image)`
  ${({ theme }) => css`
    border-radius: ${theme.radius.sm};
  `}
`

export const ArticleHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.space[1]};
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.gray400};
  `}
`

export const ArticleMainTagLabel = styled.span`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.accentColor};
  `}
`

export const ArticleDate = styled.time`
  ${({ theme }) => css`
    text-transform: unset,
    font-weight: ${theme.fontWeights.medium},
  `}
`
