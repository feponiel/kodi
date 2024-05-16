import { Either, left, right } from '@/core/errors/types/either'
import { UniqueEntityId } from '@/core/value-objects/unique-entity-id'
import { Article } from '../../enterprise/entities/article'
import { ArticlesRepository } from '../repositories/articles-repository'
import { TitleAlreadyInUseError } from '@/core/errors/title-already-in-use-error'
import { Slug } from '@/core/value-objects/slug'

interface CreateArticleUseCaseRequest {
  authorId: UniqueEntityId
  title: string
  content: string
}

type CreateArticleUseCaseResponse = Either<
  TitleAlreadyInUseError,
  { article: Article }
>

export class CreateArticleUseCase {
  constructor(private articlesRepository: ArticlesRepository) {}

  async execute({
    authorId,
    title,
    content,
  }: CreateArticleUseCaseRequest): Promise<CreateArticleUseCaseResponse> {
    const articleWithSameTitle = await this.articlesRepository.findBySlug(
      Slug.createFromText(title).toString(),
    )

    if (articleWithSameTitle) {
      return left(new TitleAlreadyInUseError(title))
    }

    const article = Article.create({
      authorId,
      title,
      content,
    })

    await this.articlesRepository.create(article)

    return right({
      article,
    })
  }
}
