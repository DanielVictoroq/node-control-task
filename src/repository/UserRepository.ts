import { IUser } from '@/interface'
import { makeUser, returnDataUsers } from '@/models'
import { Users } from '../database/entity/Users'

interface IDatabaseEntity {
  findOne(id: number, options?: findOptions): Promise<Users>
}

type findOptions = {
  relations?: string[]
}

export class UserRepository {
  private database: IDatabaseEntity

  constructor(database: IDatabaseEntity) {
    this.database = database
  }

  async list(res?: unknown): Promise<returnDataUsers> {
    const datFind = await this.database.findOne(1)
    return {data : makeUser( datFind as IUser)}
  }

  async insereTipo(res: any, bodyReq: any) {
    return await this.database.findOne(1)
  }
}