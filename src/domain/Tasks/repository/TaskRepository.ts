import { Tasks } from '@/database/entity'
import {
  ITask,
  makeTask,
  returnDataTasks,
} from '@/domain/Tasks'
import { findOptions } from '@/domain/Utils'
import { DeepPartial, SelectQueryBuilder, UpdateResult } from 'typeorm'
import { filter, orderValue, Task } from '../model'

interface IDatabaseEntity {
  findOne(id: number): Promise<Tasks>
  findAndCount(options: findOptions): Promise<[unknown[], number]>
  create(entityLike: DeepPartial<Task>): Tasks;
  save(options?: Task): Promise<Task>
  update(id: number, alias: DeepPartial<Tasks>): Promise<UpdateResult>
  createQueryBuilder(alias?: string): SelectQueryBuilder<Tasks>
}

interface ITaskRepository {
  fetch(
    filters?: filter,
    order?: orderValue,
    page?: number,
    itemsPerPage?: number,
  ): Promise<returnDataTasks>
  create(tasks: Task): Promise<returnDataTasks>
  update(id: number, options: Task): Promise<returnDataTasks>
  delete(id: number): Promise<returnDataTasks>
}
export class TaskRepository implements ITaskRepository {
  private database: IDatabaseEntity

  constructor(database: IDatabaseEntity) {
    this.database = database
  }

  async fetch(
    filters?: filter,
    order?: orderValue,
    itemsPerPage?: number,
  ): Promise<returnDataTasks> {
    console.log({ where: filters, order, take: itemsPerPage })
    const [findtask] = await this.database.findAndCount({ where: filters, order, take: itemsPerPage })
    const tasks = new Array(findtask.length)

    for (let i = 0; i < findtask.length; i++) {
      tasks[i] = makeTask(findtask[i] as ITask)
    }
    return { status: 200, tasks }
  }

  async create(tasks: Task): Promise<returnDataTasks> {
    return { status: 200, task: await this.database.save(tasks) }
  }

  async update(id: number, data: Task): Promise<returnDataTasks> {
    const updateTask = this.database.create({
      name: data?.name,
      debt_id: data?.debt_id,
      description: data?.description,
      credit_id: data?.credit_id,
      dt_task: data?.dt_task,
      type_task_id: data?.type_task_id,
      updated_at: data?.updated_at,
    })

    return { status: 200, task: await this.database.update(id, updateTask) }
  }

  async delete(id: number): Promise<returnDataTasks> {
    return { status: 200 }
  }
}