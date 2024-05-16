import { InMemoryArticlesRepository } from 'test/repositories/in-memory-articles-repository'
import { CreateArticleUseCase } from './create-article'
import { UniqueEntityId } from '@/core/value-objects/unique-entity-id'
import { makeArticle } from 'test/factories/make-article'
import { TitleAlreadyInUseError } from '@/core/errors/title-already-in-use-error'

let inMemoryArticlesRepository: InMemoryArticlesRepository
let sut: CreateArticleUseCase

describe('Create Article Use Case', () => {
  beforeEach(() => {
    inMemoryArticlesRepository = new InMemoryArticlesRepository()
    sut = new CreateArticleUseCase(inMemoryArticlesRepository)
  })

  it('should be able to create a new article', async () => {
    const result = await sut.execute({
      authorId: new UniqueEntityId('author-01'),
      title: 'Example Title',
      content: 'Lorem Ipsum Dolor',
    })

    expect(result.isRight()).toBe(true)
    expect(result.value).toEqual({
      article: inMemoryArticlesRepository.items[0],
    })
  })

  it('should not be able to create an article with a title already in use', async () => {
    const article = makeArticle({ title: 'Example Title' })

    await inMemoryArticlesRepository.create(article)

    const result = await sut.execute({
      authorId: new UniqueEntityId('author-01'),
      title: 'Example Title',
      content: 'Lorem Ipsum Dolor',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(TitleAlreadyInUseError)
  })
})
