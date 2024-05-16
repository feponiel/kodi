import { Entity } from '@/core/entities/entity'
import { Optional } from '@/core/types/optional'
import { Slug } from '@/core/value-objects/slug'
import { UniqueEntityId } from '@/core/value-objects/unique-entity-id'

export interface ArticleProps {
  authorId: UniqueEntityId
  title: string
  slug: Slug
  content: string
  createdAt: Date
  updatedAt?: Date | null
}

export class Article extends Entity<ArticleProps> {
  static create(
    props: Optional<ArticleProps, 'slug' | 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const article = new Article(
      {
        ...props,
        slug: props.slug ?? Slug.createFromText(props.title),
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return article
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  get authorId() {
    return this.props.authorId
  }

  get title() {
    return this.props.title
  }

  get slug() {
    return this.props.slug
  }

  get content() {
    return this.props.content
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  set title(value: string) {
    this.props.title = value

    this.touch()
  }

  set content(value: string) {
    this.props.content = value

    this.touch()
  }
}
