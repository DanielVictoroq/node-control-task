import { User } from '../database/entity/User'

interface IDatabaseEntity {
  findOne(id: number): Promise<User>
}

export class TypesModelsRepository {
  private repository: IDatabaseEntity

  constructor(repository: IDatabaseEntity) {
    this.repository = repository
  }

  async list(res?: unknown) {
    return await this.repository.findOne(1)
  }

  async insereTipo(res: any, bodyReq: any) {
    return await this.repository.findOne(1)
  }
}