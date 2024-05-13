import { getFormatedDate } from '@/utils/get-formated-date'
import {
  ArticlePreviewAuthor,
  ArticlePreviewContent,
  ArticlePreviewDate,
  ArticlePreviewFooter,
  ArticlePreviewMainCategory,
  ArticlePreviewPostInfo,
  ArticlePreviewThumbnail,
  ArticlePreviewViews,
  StyledArticlePreview,
} from './style'
import { Avatar, Title } from '@/styles/global'
import { Calendar, Eye } from '@phosphor-icons/react'

interface ArticlePreviewProps {
  author: {
    name: string
    profilePicture: string
  }
  title: string
  thumbnail: string
  mainCategory: string
  redirectTo: string
  publishedAt: Date
}

export function ArticlePreview({
  author,
  title,
  thumbnail,
  mainCategory,
  redirectTo,
  publishedAt,
}: ArticlePreviewProps) {
  const { formatedDate, dateRelativeToNow } = getFormatedDate(publishedAt)

  return (
    <StyledArticlePreview href={redirectTo}>
      <ArticlePreviewThumbnail
        src={thumbnail}
        alt={`Imagem representativa do artigo: ${title}`}
        width={190}
        height={190}
      />
      <ArticlePreviewContent>
        <ArticlePreviewMainCategory>{mainCategory}</ArticlePreviewMainCategory>

        <Title $level={3} $size="md">
          {title}
        </Title>

        <ArticlePreviewFooter>
          <ArticlePreviewPostInfo>
            <ArticlePreviewAuthor>
              <Avatar
                src={author.profilePicture}
                alt={`Foto de perfil de ${author.name}`}
                width={24}
                height={24}
              />
              <span>{author.name}</span>
            </ArticlePreviewAuthor>
            •
            <ArticlePreviewDate
              title={formatedDate}
              dateTime={publishedAt.toISOString()}
            >
              <Calendar weight="bold" />
              {dateRelativeToNow}
            </ArticlePreviewDate>
          </ArticlePreviewPostInfo>
          <ArticlePreviewViews>
            <Eye weight="bold" />
            {4} visualizações
          </ArticlePreviewViews>
        </ArticlePreviewFooter>
      </ArticlePreviewContent>
    </StyledArticlePreview>
  )
}
