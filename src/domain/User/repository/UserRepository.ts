import { defaultDataSource, Users } from '@/database'
import { makeUser, returnDataUsers, User } from '@/domain/User'

interface IUserRepository {
  find(userId: number): Promise<returnDataUsers | undefined>
  create(user: User): Promise<returnDataUsers>
  findCustom(data: object): Promise<returnDataUsers>
}

export class UserRepository implements IUserRepository {

  async find(userId: number): Promise<returnDataUsers | undefined> {
    const datFind = await defaultDataSource.manager.findOne(Users, {
      where: { id: userId },
    })

    if (datFind) {
      return { user: makeUser(datFind) }
    }
    return undefined
  }

  async create(user: User): Promise<returnDataUsers> {
    const entity: Users = Object.assign(new Users(), { ...user, id: undefined })
    return { user: await defaultDataSource.manager.save(entity) }
  }

  async findCustom(data: object): Promise<returnDataUsers> {
    const users = await defaultDataSource.manager.find(Users, { where: { ...data } })
    const result: User[] = []
    users.forEach((user) => result.push(makeUser(user)))
    return { user: result[0], users: result }
  }
}