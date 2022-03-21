import { ScheduleFinancials, Tasks } from '@/database/entity'
import { IUser } from '@/domain/User'

export class User implements IUser {

  constructor(
    public id: number,
    public name: string,
    public login: string,
    public password: string,
    public document: string,
    public email: string,
    public tasks?: Tasks,
    public schedules?: ScheduleFinancials,
  ) { }
}

export type returnDataUsers = {
  user?: User,
  users?: Array<User>
}

export type returnToken = {
  token?: string
}

export type returnTokenData = {
  status?: number
  message?: string
}

export function makeUser(input: IUser): User {
  const user = new User(
    input.id,
    input.name,
    input.login,
    input.password,
    input.document,
    input.email,
    input.tasks,
    input.schedules,
  )
  return user
}