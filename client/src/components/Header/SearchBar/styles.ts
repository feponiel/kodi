import styled, { css } from 'styled-components'

export const StyledSearchBar = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    height: 40px;
    background: ${theme.colors.gray200};
    border-radius: ${theme.radius.sm};
  `}
`

export const SearchInput = styled.input`
  ${({ theme }) => css`
    flex: 1;
    padding-left: ${theme.space[4]};
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.gray500};
    background: transparent;
    border: none;
    border-top-left-radius: ${theme.radius.lg};
    border-bottom-left-radius: ${theme.radius.lg};
    outline: none;

    &::placeholder {
      color: ${theme.colors.gray400};
    }
  `}
`

export const SearchButton = styled.button`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    line-height: 0;
    font-size: ${theme.fontSizes.md};
    color: ${theme.colors.gray500};
    background: none;
    border: none;
    border-top-left-radius: ${theme.radius.lg};
    border-bottom-left-radius: ${theme.radius.lg};
  `}
`
