import { filter, returnDataTasks, TaskRepository } from '@/domain/Tasks'
import { orderValue } from '../model'

export class TaskService {
  private taskRepo: TaskRepository

  constructor(taskRepo: TaskRepository) {
    this.taskRepo = taskRepo
  }

  async fetch(
    relations?: Array<string>,
    where?: filter,
    order?: orderValue,
    take?: number,
  ): Promise<returnDataTasks> {

    return await this.taskRepo.fetch(
      relations,
      where,
      order,
      take,
    )
  }
}