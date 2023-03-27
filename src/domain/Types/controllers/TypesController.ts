import { returnDataTypes, TypesRepository } from '@/domain/Types'

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