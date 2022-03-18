import { Task } from '@/models'

export class TasksController {
  private task: Task

  constructor(task: Task) {
    this.task = task
  }

  async lista(res: any) {
    return this.task.title
  }
}