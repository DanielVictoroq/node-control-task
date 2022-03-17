import { User } from '@/database/entity'
import { TypesModelsRepository } from '@/repository'

export class TypesModelsController {
  private repository: TypesModelsRepository

  constructor(typesRepository: TypesModelsRepository) {
    this.repository = typesRepository
  }

  async list(res?: unknown): Promise<User> {
    return await this.repository.list(1)
  }

  async insereTipo(res: any, bodyReq: any) {
    return await this.repository.list(1)
  }
}