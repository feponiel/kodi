import styled, { css } from 'styled-components'

export const StyledFooter = styled.footer`
  ${({ theme }) => css`
    grid-area: footer;
    width: 100%;
    margin-top: 110px;
    padding: ${theme.space[3]} 0;
    background: ${theme.colors.gray300};
    border-bottom: 5px solid ${theme.colors.accentColor};

    .footer__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `}
`

export const FooterNavigation = styled.nav`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xxs};

    ul {
      display: flex;
      list-style: none;
    }

    li + li::before {
      content: '|';
      padding: 0 ${theme.space[2]};
      color: ${theme.colors.gray500};
    }

    a {
      text-decoration: none;
      font-family: ${theme.fonts.title};
      color: ${theme.colors.gray500};
    }
  `}
`
