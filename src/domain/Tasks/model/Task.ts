import { ITask } from '@/domain/Tasks'

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

export type returnDataTasks = {
  task?: Task,
  tasks?: Array<Task>
}


export type relationsFields = ['type_task_id', 'debt_id', 'credit_id', 'user_id']
export type relationsValuesFields = 'type_task_id' | 'debt_id' | 'credit_id' | 'user_id'

export const filterFields = ['name', 'description']
export type filter = {
  [key in typeof filterFields[number]]?: string
}

export const orderFields = ['document', 'site', 'name', 'businessName', 'createdAt', 'updatadAt']
type orderDirection = 'ASC' | 'DESC'

export type orderValue = {
  [key in typeof orderFields[number]]?: orderDirection
}