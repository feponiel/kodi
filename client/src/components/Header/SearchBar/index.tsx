import { SearchButton, SearchInput, StyledSearchBar } from './styles'
import { MagnifyingGlass } from '@phosphor-icons/react'

export function SearchBar() {
  return (
    <StyledSearchBar>
      <SearchInput placeholder="O que deseja explorar hoje?" />
      <SearchButton>
        <MagnifyingGlass />
      </SearchButton>
    </StyledSearchBar>
  )
}
