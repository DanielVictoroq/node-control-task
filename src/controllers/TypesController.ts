import { Types } from '@/database/entity'
import { returnDataTypes } from '@/models'
import { TypesRepository } from '@/repository'

export class TypesController {
  private typesRepo: TypesRepository

  constructor(typesRepo: TypesRepository) {
    this.typesRepo = typesRepo
  }

  async list(res?: unknown): Promise<returnDataTypes> {
    return await this.typesRepo.list()
  }

  async insereTipo(res: any, bodyReq: any) {
    return await this.typesRepo.list()
  }
}