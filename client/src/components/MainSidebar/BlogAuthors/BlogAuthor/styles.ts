import { Avatar } from '@/styles/global'
import styled, { css } from 'styled-components'

export const StyledBlogAuthor = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-weight: ${theme.fontWeights.bold};
    }
  `}
`

export const AuthorWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.space[2]};
  `}
`

export const AuthorPicture = styled(Avatar)`
  filter: grayscale(100%) brightness(120%) contrast(75%);
`

export const AuthorInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > a {
      font-family: ${theme.fonts.title};
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.accentColor};
    }
  `}
`

export const AuthorPresentation = styled.div``

export const AuthorSynthesis = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.gray400};
  `}
`

export const AuthorSocialMedia = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space[2]};
    font-size: ${theme.fontSizes.md};

    a {
      display: flex;
      align-items: center;
      gap: ${theme.space[1]};
      line-height: 0;
      text-decoration: none;
      color: ${theme.colors.accentColorLight};

      span {
        display: block;
        font-size: ${theme.fontSizes.xxs};
      }
    }
  `}
`
