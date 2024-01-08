import { Container } from '@/styles/global'
import { StyledHeader } from './styles'
import { Logo } from '../Logo'
import { SearchBar } from '../SearchBar'
import { Avatar } from '../Avatar'

export function Header() {
  return (
    <StyledHeader>
      <Container className="header-container">
        <Logo />
        <SearchBar />
        <Avatar avatarUrl="https://github.com/feponiel.png" />
      </Container>
    </StyledHeader>
  )
}
