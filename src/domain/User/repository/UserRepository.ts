import { makeUser, returnDataUsers, IUser } from '@/domain/User'
import { Users } from '@/database/entity'

interface IDatabaseEntity {
  findOne(id: number, options?: findOptions): Promise<Users>
  find(options?: findOptions): Promise<any>
}

type findOptions = {
  where?: { login?: string }
  relations?: string[]
  take?: number
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

  async findLogin(login: string): Promise<returnDataUsers> {
    const datFind = await this.database.find({ where: { login: login }})
    return { data: makeUser(datFind[0] as IUser) }
  }
}