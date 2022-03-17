import { Tasks } from '@/models'

export class TasksController {
  private tasks: Tasks

  constructor(tasks: Tasks) {
    this.tasks = tasks
  }

  async lista(res: any) {
    return this.tasks.title
  }
}