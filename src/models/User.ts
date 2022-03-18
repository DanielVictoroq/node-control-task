import { ScheduleFinancials, Tasks } from '@/database/entity'
import { IUser } from '@/interface'

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
  data: User
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