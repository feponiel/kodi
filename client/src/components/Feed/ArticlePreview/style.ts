import Image from 'next/image'
import Link from 'next/link'
import styled, { css } from 'styled-components'

export const StyledArticlePreview = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    overflow: hidden;
    padding: ${theme.space[4]};
    text-decoration: none;
    color: initial;
    background: ${theme.colors.white};
  `}
`

export const ArticlePreviewThumbnail = styled(Image)``

export const ArticlePreviewMainCategory = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    margin-bottom: ${theme.space[2]};
    padding: ${theme.space[1]} ${theme.space[2]};
    font-size: ${theme.fontSizes.xxs};
    color: ${theme.colors.white};
    background: ${theme.colors.accentColor};
    border-radius: ${theme.radius.xs};
  `}
`

export const ArticlePreviewContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: ${theme.space[4]} 0 ${theme.space[3]} ${theme.space[3]};

    h3 {
      font-weight: ${theme.fontWeights.semiBold};
    }
  `}
`

export const ArticlePreviewFooter = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: ${theme.space[4]};
    font-size: ${theme.fontSizes.xs};
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.white};
  `}
`

export const ArticlePreviewPostInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.space[1]};
    color: ${theme.colors.gray400};

    > * {
      display: flex;
      align-items: center;
      gap: ${theme.space[1]};
    },
  `}
`

export const ArticlePreviewDate = styled.time`
  text-transform: unset;
`

export const ArticlePreviewAuthor = styled.div`
  ${({ theme }) => css`
    img {
      border-radius: ${theme.radius.xs};
    }

    span {
      color: ${theme.colors.accentColor};
    }
  `}
`

export const ArticlePreviewViews = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.space[1]};
    margin-top: ${theme.space[3]};
    padding: ${theme.space[1]};
    color: ${theme.colors.gray400};
    background: ${theme.colors.gray100};
    border: 1px solid ${theme.colors.gray400};
    border-radius: ${theme.radius.xs};
    text-transform: unset;
  `}
`
