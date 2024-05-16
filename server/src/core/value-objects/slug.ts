import { ValueObject } from '../entities/value-object'

interface SlugProps {
  slug: string
}

export class Slug extends ValueObject<SlugProps> {
  static createFromText(text: string) {
    const slug = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '')

    return new Slug({ slug })
  }

  toValue() {
    return this.props.slug
  }

  toString() {
    return this.props.slug
  }
}
