import { Article } from '../../enterprise/entities/article'

export abstract class ArticlesRepository {
  abstract create(article: Article): Promise<void>
  abstract findById(id: string): Promise<Article | null>
  abstract findBySlug(slug: string): Promise<Article | null>
}
