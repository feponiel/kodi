import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import {
  AuthorInfo,
  AuthorPicture,
  StyledBlogAuthor,
  AuthorSocialMedia,
  AuthorPresentation,
  AuthorSynthesis,
  AuthorWrapper,
} from './styles'
import Link from 'next/link'
import { Title } from '@/styles/global'

interface BlogAuthorProps {
  name: string
  synthesis: string
  profilePicture: string
  social: {
    linkedInUrl: string
    githubUrl: string
  }
  blogLink: string
}

export function BlogAuthor({
  name,
  synthesis,
  profilePicture,
  social,
  blogLink,
}: BlogAuthorProps) {
  return (
    <StyledBlogAuthor>
      <AuthorWrapper>
        <AuthorPicture
          src={profilePicture}
          alt={`Foto de perfil do autor ${name}`}
          width={54}
          height={54}
        />

        <AuthorInfo>
          <AuthorPresentation>
            <Title $level={3} $size="xs">
              {name}
            </Title>
            <AuthorSynthesis>{synthesis}</AuthorSynthesis>
          </AuthorPresentation>

          <Link href={blogLink}>Ler artigos</Link>
        </AuthorInfo>
      </AuthorWrapper>
      <AuthorSocialMedia>
        <Link href={social.linkedInUrl} target="_blank">
          <LinkedinLogo weight="duotone" />
        </Link>

        <Link href={social.linkedInUrl} target="_blank">
          <GithubLogo weight="duotone" />
        </Link>
      </AuthorSocialMedia>
    </StyledBlogAuthor>
  )
}
