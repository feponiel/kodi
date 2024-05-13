'use client'

import { Container } from '@/styles/global'
import { Logo } from '../Logo'
import { FooterNavigation, StyledFooter } from './styles'
import Link from 'next/link'

export function Footer() {
  return (
    <StyledFooter>
      <Container className="footer__container">
        <Logo />

        <FooterNavigation>
          <ul>
            <li>
              <Link href="https://youtube.com/@felpslive">sua conta</Link>
            </li>

            <li>
              <Link href="https://youtube.com/@felpslive">termos de uso</Link>
            </li>

            <li>
              <Link href="https://youtube.com/@felpslive">
                política de privacidade
              </Link>
            </li>

            <li>
              <Link href="https://youtube.com/@felpslive">
                anunciar conosco
              </Link>
            </li>
          </ul>
        </FooterNavigation>
      </Container>
    </StyledFooter>
  )
}
