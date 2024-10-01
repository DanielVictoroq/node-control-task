import { IFetchDebtService, filterDebt, orderDebtValue } from '@/domain/Debts'
import { returnData } from '@/domain/Utils'
import { Request } from 'express'

export class FetchDebtController {
  constructor(private debts: IFetchDebtService) {
    this.debts = debts
  }

  async parseFetchItens(req: Request): Promise<{ filters: filterDebt, order: orderDebtValue, itemsPerPage: number }> {
    let itemsPerPage = 100
    itemsPerPage = req.body.itemsPerPage ? req.body.itemsPerPage : itemsPerPage
    const { order, filters } = req.body
    return { filters, order, itemsPerPage }
  }

  async fetch(req: Request): Promise<returnData> {
    const { filters, order, itemsPerPage } = await this.parseFetchItens(req)
    return await this.debts.fetch(filters, order, itemsPerPage)
  }
}