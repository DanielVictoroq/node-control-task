import { Tasks } from '@/database/entity'
import { findOptions, returnData } from '@/domain/Utils'
import { ICredit, makeCredit } from '../interface'
import { filterCredit, orderCreditValue } from '../model/Credit'

interface IDatabaseEntity {
  findOne(id: number): Promise<Tasks>
  findAndCount(options?: findOptions): Promise<[unknown[], number]>
}

export class CreditsRepository {
  private database: IDatabaseEntity

  constructor(database: IDatabaseEntity) {
    this.database = database
  }

  async fetch(
    filters?: filterCredit,
    order?: orderCreditValue,
    itemsPerPage?: number,
  ): Promise<returnData> {
    const [findCredit] = await this.database.findAndCount({ where: filters, order, take: itemsPerPage })
    const credit = new Array(findCredit.length)

    for (let i = 0; i < findCredit.length; i++) {
      credit[i] = makeCredit(findCredit[i] as ICredit)
    }
    return { status: 200, entity: credit }
  }
}