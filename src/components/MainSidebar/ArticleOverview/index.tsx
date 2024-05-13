import {
  ArticleMainTagLabel,
  ArticleContent,
  ArticleDate,
  ArticleHeader,
  StyledArticleOverview,
  ArticleThumbnail,
} from './styles'
import { Clock } from '@phosphor-icons/react'
import Link from 'next/link'
import { getFormatedDate } from '@/utils/get-formated-date'
import { Title } from '@/styles/global'

interface ArticleOverviewProps {
  title: string
  image: {
    url: string
    alt: string
  }
  publishedAt: Date
  redirectTo: string
}

export function ArticleOverview({
  title,
  image,
  publishedAt,
  redirectTo,
}: ArticleOverviewProps) {
  const { formatedDate, dateRelativeToNow } = getFormatedDate(publishedAt)

  return (
    <StyledArticleOverview>
      <Link href={redirectTo}>
        <ArticleThumbnail
          src={image.url}
          alt={image.alt}
          width={60}
          height={60}
        />

        <ArticleContent>
          <ArticleHeader>
            <ArticleMainTagLabel>Python</ArticleMainTagLabel>|
            <Clock weight="bold" />
            <ArticleDate
              title={formatedDate}
              dateTime={publishedAt.toISOString()}
            >
              {dateRelativeToNow}
            </ArticleDate>
          </ArticleHeader>

          <Title $level={3}>{title}</Title>
        </ArticleContent>
      </Link>
    </StyledArticleOverview>
  )
}
