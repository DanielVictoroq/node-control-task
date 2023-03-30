import { ScheduleFinancials, Users } from '@/database/entity'
import { Task } from '@/domain/Tasks'

export interface IUser {
  id?: number
  name?: string
  login?: string
  password?: string
  document?: string
  email?: string
  tasks?: Task[],
  schedules?: ScheduleFinancials[],
}

export class User implements IUser {

  constructor(
    public id?: number,
    public name?: string,
    public login?: string,
    public password?: string,
    public document?: string,
    public email?: string,
    public tasks?: Task[],
    public schedules?: ScheduleFinancials[],
  ) { }
}

export type returnDataUsers = {
  user?: User,
  users?: User[]
}

export type returnToken = {
  token?: string
}

export type returnTokenData = {
  status?: number
  message?: string
}

export function makeUser(input: Users): User {
  const user = new User(
    input?.id,
    input?.name,
    input?.login,
    input?.password,
    input?.document,
    input?.email,
    input?.tasks,
    input?.schedules,
  )
  return user
}