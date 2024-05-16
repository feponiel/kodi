import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/value-objects/unique-entity-id'

export interface ReaderProps {
  name: string
  synthesis: string
  email: string
  password: string
}

export class Reader extends Entity<ReaderProps> {
  static create(props: ReaderProps, id?: UniqueEntityId) {
    const reader = new Reader(props, id)

    return reader
  }

  get name() {
    return this.props.name
  }

  get synthesis() {
    return this.props.synthesis
  }
}
