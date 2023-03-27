import { Tasks } from '@/database/entity'
import {
  ITask,
  makeTask,
} from '@/domain/Tasks'
import { findOptions, returnData } from '@/domain/Utils'
import { DeepPartial, DeleteResult, SelectQueryBuilder, UpdateResult } from 'typeorm'
import { filter, orderValue, Task } from '../model'

interface IDatabaseEntity {
  findOne(id: number): Promise<Tasks>
  findAndCount(options: findOptions): Promise<[unknown[], number]>
  create(entityLike: DeepPartial<Task>): Tasks;
  save(options?: Task): Promise<Task>
  update(id: number, alias: DeepPartial<Tasks>): Promise<UpdateResult>
  createQueryBuilder(alias?: string): SelectQueryBuilder<Tasks>
  delete(id: number): Promise<DeleteResult>
}

interface ITaskRepository {
  fetch(
    filters?: filter,
    order?: orderValue,
    page?: number,
    itemsPerPage?: number,
  ): Promise<returnData>
  create(tasks: Task): Promise<returnData>
  update(id: number, options: Task): Promise<returnData>
  delete(id: number): Promise<returnData>
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
  ): Promise<returnData> {
    const [findtask] = await this.database.findAndCount({ where: filters, order, take: itemsPerPage })
    const task = new Array(findtask.length)

    for (let i = 0; i < findtask.length; i++) {
      task[i] = makeTask(findtask[i] as ITask)
    }
    return { status: 200, entity: task }
  }

  async create(tasks: Task): Promise<returnData> {
    return { status: 200, entity: await this.database.save(tasks) }
  }

  async update(id: number, data: Task): Promise<returnData> {
    const updateTask = this.database.create({
      name: data?.name,
      debt_id: data?.debt_id,
      description: data?.description,
      credit_id: data?.credit_id,
      dt_task: data?.dt_task,
      type_task_id: data?.type_task_id,
      updated_at: data?.updated_at,
    })

    return { status: 200, entity: await this.database.update(id, updateTask) }
  }

  async delete(id: number): Promise<returnData> {
    return { status: 200, entity: await this.database.delete(id) }
  }
}