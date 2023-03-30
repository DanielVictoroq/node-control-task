import {
  ITask,
  makeTask,
} from '@/domain/Tasks'
import { returnData } from '@/domain/Utils'
import { filter, orderValue, Task } from '../model'
import { defaultDataSource, Tasks as TasksOrm } from '@/database'
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

  async fetch(
    filters?: filter,
    order?: orderValue,
    itemsPerPage?: number,
  ): Promise<returnData> {
    const [findtask] = await defaultDataSource.manager.findAndCount(TasksOrm, { where: filters, order, take: itemsPerPage })
    const task = new Array(findtask.length)

    for (let i = 0; i < findtask.length; i++) {
      task[i] = makeTask(findtask[i] as ITask)
    }
    return { status: 200, entity: task }
  }

  async create(tasks: Task): Promise<returnData> {
    const entity: TasksOrm = Object.assign(new TasksOrm(), { ...tasks, id: undefined })
    await defaultDataSource.manager
      .createQueryBuilder()
      .insert()
      .into(TasksOrm)
      .values(entity)
      .execute()
    return { status: 200, entity: await defaultDataSource.manager.save(tasks) }

  }

  async update(id: number, tasks: Task): Promise<returnData> {
    const entity: TasksOrm = Object.assign(new TasksOrm(), { ...tasks, id: undefined })
    return { status: 200, entity: await defaultDataSource.manager.update(TasksOrm, id, entity) }
  }

  async delete(id: number): Promise<returnData> {
    return { status: 200, entity: await defaultDataSource.manager.delete(TasksOrm, id) }
  }
}