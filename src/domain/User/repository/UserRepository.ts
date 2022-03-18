import { makeUser, returnDataUsers, IUser } from '@/domain/User'
import { Users } from '@/database/entity'

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

  async find(user_id: number): Promise<returnDataUsers> {
    const datFind = await this.database.findOne(user_id)
    return { data: makeUser(datFind as IUser) }
  }

  async findLogin(user: string, password: string): Promise<returnDataUsers> {
    const datFind = await this.database.findOne(1)
    return { data: makeUser(datFind as IUser) }
  }

  async insereTipo(res: any, bodyReq: any) {
    return await this.database.findOne(1)
  }
}