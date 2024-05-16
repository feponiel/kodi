import { UseCaseError } from './types/use-case-error'

export class TitleAlreadyInUseError extends Error implements UseCaseError {
  constructor(title: string) {
    super(`Title ${title} is already in use!`)
  }
}
