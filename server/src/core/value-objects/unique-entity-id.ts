import { randomUUID } from 'node:crypto'
import { ValueObject } from '../entities/value-object'

interface UniqueEntityIdProps {
  id: string
}

export class UniqueEntityId extends ValueObject<UniqueEntityIdProps> {
  constructor(id?: string) {
    super({
      id: id ?? randomUUID(),
    })
  }

  toValue() {
    return this.props.id
  }

  toString() {
    return this.props.id
  }
}
