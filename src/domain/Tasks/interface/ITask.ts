import { Task } from '../model'

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