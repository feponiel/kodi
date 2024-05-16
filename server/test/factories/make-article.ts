import { UniqueEntityId } from '@/core/value-objects/unique-entity-id'
import {
  Article,
  ArticleProps,
} from '@/domain/blog/enterprise/entities/article'
import { faker } from '@faker-js/faker'

export function makeArticle(
  override?: Partial<ArticleProps>,
  id?: UniqueEntityId,
): Article {
  const article = Article.create(
    {
      authorId: new UniqueEntityId(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return article
}
