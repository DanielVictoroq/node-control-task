import { returnData } from '@/domain/Utils'
import { filterDebt, orderDebtValue, makeDebt } from '@/domain/Debts'
import { defaultDataSource, DebtMapper } from '@/database'

export interface IFetchDebtRepository {
  fetch(
    filters?: filterDebt,
    order?: orderDebtValue,
    itemsPerPage?: number,
  ): Promise<returnData>
}

export class FetchDebtRepository implements IFetchDebtRepository {
  async fetch(
    filters?: filterDebt,
    order?: orderDebtValue,
    itemsPerPage?: number,
  ): Promise<returnData> {
    const [findDebt] = await defaultDataSource.manager.findAndCount(DebtMapper, { where: filters, order, take: itemsPerPage })
    const debts = new Array(findDebt.length)
    findDebt.forEach((debt: DebtMapper) => debts.push(makeDebt(debt)))
    return { status: 200, entity: debts }
  }
}