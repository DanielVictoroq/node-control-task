import { filterDebt, FetchDebtRepository, orderDebtValue } from '@/domain/Debts'
import { returnData } from '@/domain/Utils'

export interface IFetchDebtService {
  fetch(filters?: filterDebt, order?: orderDebtValue, itemsPerPage?: number,): Promise<returnData>
}

export class FetchDebtService implements IFetchDebtService {
  private debtsRepo: FetchDebtRepository

  constructor(debtsRepo: FetchDebtRepository) {
    this.debtsRepo = debtsRepo
  }

  async fetch(
    filters?: filterDebt,
    order?: orderDebtValue,
    itemsPerPage?: number,
  ): Promise<returnData> {

    return await this.debtsRepo.fetch(
      filters,
      order,
      itemsPerPage,
    )
  }
}