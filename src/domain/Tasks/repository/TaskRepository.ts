import { Tasks } from '@/database/entity'

type findOptions = {
  relations?: string[]
}

interface IDatabaseEntity {
  findOne(id: number): Promise<Tasks>
  findAndCount(options?: findOptions): Promise<[unknown[], number]>
}

export class TaskRepository {
  private database: IDatabaseEntity

  constructor(database: IDatabaseEntity) {
    this.database = database
  }

}