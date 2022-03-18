import { Debts } from '@/database/entity'

type findOptions = {
  relations?: string[]
}

interface IDatabaseEntity {
  findOne(id: number): Promise<Debts>
  findAndCount(options?: findOptions): Promise<[unknown[], number]>
}

export class DebtsRepository {
  private database: IDatabaseEntity

  constructor(database: IDatabaseEntity) {
    this.database = database
  }

}