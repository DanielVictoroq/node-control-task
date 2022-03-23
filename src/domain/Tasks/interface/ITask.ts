import { Task } from '../model'

export interface ITask {
  id?: number,
  name?: string
  description?: string
  dt_task?: Date
  type_task_id?: number
  debt_id?: number
  credit_id?: number
  user_id?: number
  created_at?: Date
  updated_at?: Date
}

export function makeTask(input: ITask): Task {
  return new Task(
    input?.id,
    input?.name,
    input?.description,
    input?.dt_task,
    input?.type_task_id,
    input?.debt_id,
    input?.credit_id,
    input?.user_id,
    input?.created_at,
    input?.updated_at,
  )
}