import { makeUser, returnDataUsers, IUser } from '@/domain/User'
import { Users } from '@/database/entity'
import { User } from '../model'
import { findOptions } from '@/domain/Utils'

interface IDatabaseEntity {
  findOne(id: number, options?: findOptions): Promise<Users>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  find(options?: findOptions): Promise<any>
  create(options?: User): Promise<User>
  save(options?: User): Promise<User>
}

export class UserRepository {
  private database: IDatabaseEntity

  constructor(database: IDatabaseEntity) {
    this.database = database
  }

  async find(user_id: number): Promise<returnDataUsers> {
    const datFind = await this.database.findOne(user_id)
    return { user: makeUser(datFind as IUser) }
  }

  async create(user: User): Promise<returnDataUsers> {
    return { user: await this.database.save(user) }
  }

  async findCustom(data: object): Promise<returnDataUsers> {
    const datFind = await this.database.find({ where: data })
    const arrUser = new Array(datFind.length)

    for (let i = 0; i < datFind.length; i++) {
      arrUser[i] = makeUser(datFind[i] as IUser)
    }

    return { user: arrUser[0], users: arrUser }
  }
}