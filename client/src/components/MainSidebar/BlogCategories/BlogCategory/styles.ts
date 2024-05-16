import styled, { css } from 'styled-components'

interface StyledBlogCategoryProps {
  $isSelected: boolean
}

export const StyledBlogCategory = styled.li<StyledBlogCategoryProps>`
  ${({ theme, $isSelected }) => css`
    button {
      padding: ${theme.space[1]} ${theme.space[2]};
      font-size: ${theme.fontSizes.xxs};
      font-family: ${theme.fonts.title};
      border-radius: ${theme.radius.xs};
      user-select: none;
      cursor: pointer;
    }

    // VARIANTS
    ${$isSelected &&
    css`
      button {
        color: ${theme.colors.white};
        background: ${theme.colors.accentColor};
        border: 1px solid ${theme.colors.accentColorLight};
      }
    `}

    ${!$isSelected &&
    css`
      button {
        color: ${theme.colors.accentColor};
        background: ${theme.colors.accentColorLight};
        border: 1px solid ${theme.colors.accentColor};
      }
    `}
  `}
`
