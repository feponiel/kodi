import styled, { css } from 'styled-components'

interface StyledListSectionProps {
  $listAlignment: 'row' | 'column'
  $listScroll: boolean
}

export const StyledListSection = styled.section<StyledListSectionProps>`
  ${({ theme, $listAlignment, $listScroll }) => css`
    padding: ${theme.space[5]} ${theme.space[5]} ${theme.space[7]};
    background: ${theme.colors.white};
    border-top-right-radius: ${theme.radius.sm};
    border-bottom-right-radius: ${theme.radius.sm};
    box-shadow: 0 4px 4px 0 rgb(200, 200, 200, 0.25);

    h2 {
      margin-bottom: ${theme.space[3]};
      padding-bottom: ${theme.space[1]};
      color: ${theme.colors.gray400};
      border-bottom: 1px solid ${theme.colors.gray400};
    }

    h3 {
      font-size: 13px;
    }

    ul,
    ol {
      display: flex;
      list-style: none;
    }

    // VARIANTS
    ${$listAlignment === 'row' &&
    css`
      ul,
      ol {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${theme.space[2]};
      }
    `}

    ${$listAlignment === 'column' &&
    css`
      ul,
      ol {
        flex-direction: column;
        gap: ${theme.space[5]};
      }
    `}

    ${$listScroll &&
    css`
      ul,
      ol {
        overflow-y: auto;
      }
    `}
  `}
`
