import { styled } from '@stitches/react'

export const StyledSearchBar = styled('div', {
  flex: 1,
  display: 'flex',
  height: 43,
  background: '$gray200',
  borderRadius: '$lg',
})

export const SearchInput = styled('input', {
  flex: 1,
  paddingLeft: '$4',
  fontSize: '$sm',
  color: '$gray500',
  background: 'transparent',
  border: 'none',
  borderTopLeftRadius: '$lg',
  borderBottomLeftRadius: '$lg',
  outline: 'none',

  '&::placeholder': {
    color: '$gray400',
  },
})

export const SearchButton = styled('button', {
  width: 43,
  height: 43,
  lineHeight: 0,
  color: '$gray500',
  background: 'none',
  border: 'none',
  borderTopRightRadius: '$lg',
  borderBottomRightRadius: '$lg',
})
