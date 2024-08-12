export interface ITask {
  id?: number,
  name?: string
  description?: string
  dtTask?: Date
  typeTaskId?: number
  debtId?: number
  creditId?: number
  userId?: number
  createdAt?: Date
  updatedAt?: Date
}

export class Task implements ITask {

  constructor(
    public name?: string,
    public description?: string,
    public dt_task?: Date,
    public type_task_id?: number,
    public debt_id?: number,
    public credit_id?: number,
    public user_id?: number,
    public created_at?: Date,
    public updated_at?: Date,
    public id?: number,
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


export function makeTask(input: ITask): Task {
  return new Task(
    input?.name,
    input?.description,
    input?.dtTask,
    input?.typeTaskId,
    input?.debtId,
    input?.creditId,
    input?.userId,
    input?.createdAt,
    input?.updatedAt,
    input?.id,
  )
}