import { returnData } from '@/domain/Utils'
import { filterCredit, orderCreditValue, makeCredit, Credit } from '@/domain/Credits'
import { defaultDataSource, Credits as CreditsOrm } from '@/database'

interface ICreditsRepository {
  fetch(filters?: filterCredit, order?: orderCreditValue, itemsPerPage?: number): Promise<returnData>
}

export class CreditsRepository implements ICreditsRepository {

  async fetch(
    filters?: filterCredit,
    order?: orderCreditValue,
    itemsPerPage?: number,
  ): Promise<returnData> {
    const [findCredit] = await defaultDataSource.manager.findAndCount(CreditsOrm, { where: filters, order, take: itemsPerPage })
    const credits: Credit[] = []

    findCredit.forEach((credit: CreditsOrm) => {
      credits.push(makeCredit(credit))
    })
    return { status: 200, entity: credits }
  }
}