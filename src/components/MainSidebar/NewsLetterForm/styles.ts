import styled, { css } from 'styled-components'

export const StyledNewsLetterForm = styled.div`
  ${({ theme }) => css`
    padding: ${theme.space[5]} ${theme.space[5]} ${theme.space[7]};
    background: ${theme.colors.white};
    border-top-right-radius: ${theme.radius.sm};
    border-bottom-right-radius: ${theme.radius.sm};
    box-shadow: 0 4px 4px 0 rgb(200, 200, 200, 0.25);
    position: sticky;
    top: 0;

    h2 {
      margin-bottom: ${theme.space[2]};
      color: ${theme.colors.accentColor};
    }

    p {
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.gray400};
    }
  `}
`

export const NewsLetterSubscribeForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.space[2]};

    input {
      flex: 1;
      padding-left: ${theme.space[4]};
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.gray500};
      background: ${theme.colors.gray200};
      border: none;
      border-top-left-radius: ${theme.radius.lg};
      border-bottom-left-radius: ${theme.radius.lg};
      outline: none;

      &::placeholder {
        color: ${theme.colors.gray400};
      },
    },
  `}
`

export const NewsLetterFormSubmitButton = styled.button`
  ${({ theme }) => css`
    width: 40px;
    height: 43px;
    line-height: 0;
    font-size: ${theme.fontSizes.md};
    color: ${theme.colors.white};
    background: ${theme.colors.accentColor};
    border: none;
    border-top-right-radius: ${theme.radius.lg};
    border-bottom-right-radius: ${theme.radius.lg};
    cursor: pointer;
  `}
`
