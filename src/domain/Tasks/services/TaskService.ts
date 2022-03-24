import { filter, returnDataTasks, TaskRepository } from '@/domain/Tasks'
import { findOptions } from '@/domain/Utils'
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

  async create(tasks: Task): Promise<returnDataTasks> {
    return await this.taskRepo.create(tasks)
  }

  async update(id: number, task: Task): Promise<returnDataTasks> {
    return await this.taskRepo.update(id, task)
  }

  async delete(id: number): Promise<returnDataTasks> {
    return await this.taskRepo.delete(id)
  }
}