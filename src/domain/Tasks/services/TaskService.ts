import { filter, TaskRepository } from '@/domain/Tasks'
import { findOptions, returnData } from '@/domain/Utils'
import { getConnection } from 'typeorm'
import { orderValue, Task } from '../model'

interface ITaskService {
  fetch(options?: findOptions): Promise<returnData>
  create(tasks: Task): Promise<returnData>
  update(id: number, task: Task): Promise<returnData>
  delete(id: number): Promise<returnData>
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
  ): Promise<returnData> {

    return await this.taskRepo.fetch(
      filters,
      order,
      itemsPerPage,
    )
  }

  async create(taskModel: Task): Promise<returnData> {
    try {
      const { status, message, entity } = await this.taskRepo.create(taskModel)
      return { status, message, entity }
    } catch (err) {
      return { status: 500, message: 'Houve um problema ao criar a tarefa' }
    }
  }

  async update(id: number, taskModel: Task): Promise<returnData> {
    try {
      const { status, message, entity } = await this.taskRepo.update(id, taskModel)
      return { status, message, entity }
    } catch (err) {
      return { status: 422, message: 'Houve um problema ao atualizar a tarefa' }
    }
  }

  async delete(id: number): Promise<returnData> {
    try {
      const { status, message, entity } = await this.taskRepo.delete(id)
      return { status, message, entity }
    } catch (err) {
      return { status: 422, message: 'Houve um problema ao deletar a tarefa' }
    }
  }
}