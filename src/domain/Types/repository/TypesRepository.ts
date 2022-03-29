import { Types } from '@/database/entity'
import { IType, makeTypes, returnDataTypes } from '@/domain/Types'

type findOptions = {
  relations?: string[]
}

interface IDatabaseEntity {
  findOne(id: number): Promise<Types>
  findAndCount(options?: findOptions): Promise<[unknown[], number]>
}

export class TypesRepository {
  private database: IDatabaseEntity

  constructor(database: IDatabaseEntity) {
    this.database = database
  }

  async list(res?: unknown): Promise<returnDataTypes> {

    const [dataFind] = await this.database.findAndCount({ relations: ['aux_types_id'] })

    const data = new Array(dataFind.length)

    for (let i = 0; i < dataFind.length; i++) {
      data[i] = makeTypes(dataFind[i] as IType)
    }
    return { data }
  }

  async insereTipo(res: any, bodyReq: any) {
    return await this.database.findAndCount()
  }
}