import { Slug } from './slug'

describe('Slug Value Object', () => {
  it('should be able to create a slug from a text', () => {
    const slug = Slug.createFromText('Hello World')

    expect(slug.toString()).toEqual('hello-world')
  })
})
