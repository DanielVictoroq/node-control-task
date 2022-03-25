import { filter, returnDataTasks, TaskRepository } from '@/domain/Tasks'
import { findOptions } from '@/domain/Utils'
import { getConnection } from 'typeorm'
import { orderValue, Task } from '../model'

interface ITaskService {
  fetch(options?: findOptions): Promise<returnDataTasks>
  create(tasks: Task): Promise<returnDataTasks>
  update(id: number, task: Task): Promise<returnDataTasks>
  delete(id: number): Promise<returnDataTasks>
}

export class TaskService implements ITaskService {
  private taskRepo: TaskRepository

  constructor(taskRepo: TaskRepository) {
    this.taskRepo = taskRepo
  }

  async fetch(
    filters?: filter,
    order?: orderValue,
    itemsPerPage?: number,
  ): Promise<returnDataTasks> {

    return await this.taskRepo.fetch(
      filters,
      order,
      itemsPerPage,
    )
  }

  async create(taskModel: Task): Promise<returnDataTasks> {
    const connection = getConnection()
    try {
      await connection.query('START TRANSACTION;')
      const { status, message, task, tasks } = await this.taskRepo.create(taskModel)
      await connection.query('COMMIT;')
      return { status, message, task, tasks }
    } catch (err) {
      await connection.query('ROLLBACK;')
      return { status: 500, message: 'Houve um problema ao criar a tarefa' }
    }
  }

  async update(id: number, taskModel: Task): Promise<returnDataTasks> {
    const connection = getConnection()
    try {
      await connection.query('START TRANSACTION;')
      const { status, message, task, tasks } = await this.taskRepo.update(id, taskModel)
      await connection.query('COMMIT;')
      return { status, message, task, tasks }
    } catch (err) {
      await connection.query('ROLLBACK;')
      return { status: 422, message: 'Houve um problema ao atualizar a tarefa' }
    }
  }

  async delete(id: number): Promise<returnDataTasks> {
    return await this.taskRepo.delete(id)
  }
}