import { ArticlesRepository } from '@/domain/blog/application/repositories/articles-repository'
import { Article } from '@/domain/blog/enterprise/entities/article'

export class InMemoryArticlesRepository implements ArticlesRepository {
  public items: Article[] = []

  async create(article: Article): Promise<void> {
    this.items.push(article)
  }

  async findById(id: string): Promise<Article | null> {
    const article = this.items.find((article) => article.id.toString() === id)

    if (!article) {
      return null
    }

    return article
  }

  async findBySlug(slug: string): Promise<Article | null> {
    const article = this.items.find(
      (article) => article.slug.toString() === slug,
    )

    if (!article) {
      return null
    }

    return article
  }
}
