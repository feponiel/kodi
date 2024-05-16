import { UniqueEntityId } from '../value-objects/unique-entity-id'

export abstract class Entity<Props> {
  private _id: UniqueEntityId
  protected props: Props

  protected constructor(props: Props, id?: UniqueEntityId) {
    this.props = props
    this._id = id ?? new UniqueEntityId()
  }

  public equals(entity: Entity<unknown>) {
    if (entity === null || entity === undefined) {
      return false
    }

    if (entity.props === undefined) {
      return false
    }

    return JSON.stringify(entity.props) === JSON.stringify(this.props)
  }

  get id() {
    return this._id
  }
}
