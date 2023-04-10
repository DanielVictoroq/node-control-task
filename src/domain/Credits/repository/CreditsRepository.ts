import { returnData } from '@/domain/Utils'
import { filterCredit, orderCreditValue, makeCredit, Credit } from '@/domain/Credits'
import { defaultDataSource, Credits } from '@/database'

interface ICreditsRepository {
  fetch(filters?: filterCredit, order?: orderCreditValue, itemsPerPage?: number): Promise<returnData>
}

export class CreditsRepository implements ICreditsRepository {

  async fetch(
    filters?: filterCredit,
    order?: orderCreditValue,
    itemsPerPage?: number,
  ): Promise<returnData> {
    const [findCredit] = await defaultDataSource.manager.findAndCount(Credits, { where: filters, order, take: itemsPerPage })
    const credits: Credit[] = []

    findCredit.forEach((credit: Credits) => {
      credits.push(makeCredit(credit))
    })
    return { status: 200, entity: credits }
  }

  async create(credit: Credit): Promise<returnData> {
    const entity: Credits = Object.assign(new Credits(), { ...credit, id: undefined })
    return { status: 200, entity: await defaultDataSource.manager.save(entity) }
  }

  async update(id: number, credit: Credit): Promise<returnData> {
    const entity: Credits = Object.assign(new Credits(), { ...credit, id: undefined })
    return { status: 200, entity: await defaultDataSource.manager.update(Credits, id, entity) }
  }

  async delete(id: number): Promise<returnData> {
    return { status: 200, entity: await defaultDataSource.manager.delete(Credits, id) }
  }
}