'use client'

import { Avatar, Container } from '@/styles/global'
import { StyledHeader } from './styles'
import { Logo } from '../Logo'
import { SearchBar } from './SearchBar'

export function Header() {
  return (
    <StyledHeader>
      <Container className="header-container">
        <Logo />
        <SearchBar />
        {/* <Avatar
          src="https://github.com/feponiel.png"
          alt="Sua foto de perfil."
          width={40}
          height={40}
        /> */}
      </Container>
    </StyledHeader>
  )
}
