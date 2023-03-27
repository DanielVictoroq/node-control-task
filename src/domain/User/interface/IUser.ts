import { Tasks, ScheduleFinancials } from '@/database/entity'

export interface IUser {
  id?: number
  name?: string
  login?: string
  password?: string
  document?: string
  email?: string
  tasks?: Tasks,
  schedules?: ScheduleFinancials,
}
