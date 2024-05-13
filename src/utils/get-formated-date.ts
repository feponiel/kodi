import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function getFormatedDate(date: Date) {
  const formatedDate = format(date, "dd 'de' LLL 'de' uu 'às' HH:mm", {
    locale: ptBR,
  })
  const dateRelativeToNow = formatDistanceToNow(date, {
    addSuffix: true,
    locale: ptBR,
  })

  return {
    formatedDate,
    dateRelativeToNow,
  }
}
