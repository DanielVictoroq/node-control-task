import { TaskService } from '@/domain/Tasks'
import { findOptions } from '@/domain/Utils'
import { Request } from 'express'
import { returnDataTasks } from '../model'

export class TasksController {
  private task: TaskService

  constructor(task: TaskService) {
    this.task = task
  }

  async fetch(req: Request): Promise<returnDataTasks> {

    const { relations, where, order, take } = await this.parseReqFetch(req)

    return await this.task.fetch(relations, where, order, take)
  }

  async parseReqFetch(req: Request): Promise<findOptions> {
    let relations = new Array(0)
    if (req.body.relations) {
      relations = req.body.relations.split(',')

    }
    console.log(relations)
    const { where, order, take } = req.body
    return { relations, where, order, take }
  }
}
