import { Tasks } from '@/database/entity'
import {
  ITask,
  makeTask,
  returnDataTasks,
} from '@/domain/Tasks'
import { findOptions } from '@/domain/Utils'
import { filter, orderValue, relationsValuesFields, relationsFields } from '../model'

interface IDatabaseEntity {
  findOne(id: number): Promise<Tasks>
  findAndCount(options?: findOptions): Promise<[unknown[], number]>
}

export class TaskRepository {
  private database: IDatabaseEntity

  constructor(database: IDatabaseEntity) {
    this.database = database
  }

  async fetch(
    relations?: Array<string>,
    where?: filter,
    order?: orderValue,
    take?: number,
  ): Promise<returnDataTasks> {
    const [findtask] = await this.database.findAndCount({
      relations,
      where,
      order,
      take,
    })
    const tasks = new Array(findtask.length)

    for (let i = 0; i < findtask.length; i++) {
      tasks[i] = makeTask(findtask[i] as ITask)
    }
    return { tasks }
  }

}