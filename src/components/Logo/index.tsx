import Image from 'next/image'
import kodiLogo from '../../../public/kodi-logo.svg'

export function Logo() {
  return <Image src={kodiLogo} alt="logo" height={50} />
}
