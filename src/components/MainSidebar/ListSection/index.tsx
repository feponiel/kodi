import { ReactNode } from 'react'
import { StyledListSection } from './styles'
import { match } from 'ts-pattern'
import { Title } from '@/styles/global'

interface ListSectionProps {
  type: 'ul' | 'ol'
  alignment?: 'row' | 'column'
  isScrollable?: boolean
  maxListHeight?: number | string
  title?: string
  children: ReactNode
}

export function ListSection({
  type,
  alignment = 'column',
  isScrollable = false,
  maxListHeight,
  title,
  children,
}: ListSectionProps) {
  return (
    <StyledListSection $listAlignment={alignment} $listScroll={isScrollable}>
      {title && (
        <Title $level={2} $size="sm">
          {title}
        </Title>
      )}

      {match(type)
        .with('ul', () => {
          return (
            <ul style={{ maxHeight: isScrollable ? maxListHeight : 'none' }}>
              {children}
            </ul>
          )
        })
        .otherwise(() => {
          return (
            <ol style={{ maxHeight: isScrollable ? maxListHeight : 'none' }}>
              {children}
            </ol>
          )
        })}
    </StyledListSection>
  )
}
