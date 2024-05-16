import { ReadersRepository } from '@/domain/blog/application/repositories/readers-repository'
import { Reader } from '@/domain/blog/enterprise/entities/reader'

export class InMemoryReadersRepository implements ReadersRepository {
  public items: Reader[] = []

  async create(reader: Reader): Promise<void> {
    this.items.push(reader)
  }

  async findById(id: string): Promise<Reader | null> {
    const reader = this.items.find((reader) => reader.id.toString() === id)

    if (!reader) {
      return null
    }

    return reader
  }
}
