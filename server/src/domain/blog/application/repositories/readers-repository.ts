import { Reader } from '../../enterprise/entities/reader'

export abstract class ReadersRepository {
  abstract create(reader: Reader): Promise<void>
  abstract findById(id: string): Promise<Reader | null>
}
