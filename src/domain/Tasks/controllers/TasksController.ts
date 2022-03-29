import { TaskService } from '@/domain/Tasks'
import { returnData } from '@/domain/Utils'
import { Request } from 'express'
import { filter, orderValue, Task } from '../model'

export class TasksController {
  private task: TaskService

  constructor(task: TaskService) {
    this.task = task
  }

  async fetch(req: Request): Promise<returnData> {
    const { filters, order, itemsPerPage } = await this.parseFetchItens(req)
    return await this.task.fetch(filters, order, itemsPerPage)
  }

  async parseFetchItens(req: Request): Promise<{ filters: filter, order: orderValue, itemsPerPage: number }> {
    let itemsPerPage = 100
    itemsPerPage = req.body.itemsPerPage ? req.body.itemsPerPage : itemsPerPage
    const { order, filters } = req.body
    return { filters, order, itemsPerPage }
  }

  async create(req: Request): Promise<returnData> {
    const task = new Task()
    task.name = req.body.name
    task.description = req.body.description
    task.dt_task = req.body.dt_task
    task.type_task_id = req.body.type_task_id
    task.debt_id = req.body.debt_id
    task.credit_id = req.body.credit_id
    task.user_id = req.body.user_id
    task.created_at = new Date()

    return await this.task.create(task)
  }

  async update(req: Request): Promise<returnData> {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
      return { status: 500, message: 'Houve um problema ao efetuar a atualização' }
    }

    if (Object.keys(req.body).length === 0) {
      return { status: 401, message: 'Não informado nenhum dado para ser atualizado' }
    }

    const task = new Task()
    task.name = req.body.name ?? req.body.name
    task.description = req.body.description ?? req.body.description
    task.dt_task = req.body.dt_task ?? req.body.dt_task
    task.type_task_id = req.body.type_task_id ? parseInt(req.body.type_task_id) : undefined
    task.credit_id = req.body.credit_id ? parseInt(req.body.credit_id) : undefined
    task.debt_id = req.body.debt_id ? parseInt(req.body.debt_id) : undefined
    task.user_id = req.body.user_id ? parseInt(req.body.user_id) : undefined
    task.updated_at = new Date()

    return await this.task.update(id, task)
  }

  async delete(req: Request): Promise<returnData> {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
      return { status: 500, message: 'Houve um problema ao deletar a tarefa' }
    }

    return await this.task.delete(id)
  }

}
