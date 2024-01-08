import Image from 'next/image'
import { StyledAvatar } from './styles'
import unknownUserImage from '../../../public/unknown-user.png'

interface AvatarProps {
  avatarUrl: string
}

export function Avatar({ avatarUrl }: AvatarProps) {
  return (
    <StyledAvatar>
      <Image
        src={avatarUrl ?? unknownUserImage}
        alt="imagem do avatar do usuário"
        width={40}
        height={40}
      />
    </StyledAvatar>
  )
}
