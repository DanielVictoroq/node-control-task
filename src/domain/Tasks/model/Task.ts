import { ITask } from '@/domain/Tasks'
import { UpdateResult } from 'typeorm'

export class Task implements ITask {

  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public dt_task?: Date,
    public type_task_id?: number,
    public debt_id?: number,
    public credit_id?: number,
    public user_id?: number,
    public created_at?: Date,
    public updated_at?: Date,
  ) { }
}

export const filterFields = ['name', 'description', 'debt_id']

export type filter = {
  [key in typeof filterFields[number]]?: string
}

export const orderFields = ['name', 'type_task_id']
type orderDirection = 'ASC' | 'DESC'

export type orderValue = {
  [key in typeof orderFields[number]]?: orderDirection
}