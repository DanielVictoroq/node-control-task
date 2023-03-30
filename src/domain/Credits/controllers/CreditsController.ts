import { CreditsService, filterCredit, orderCreditValue } from '@/domain/Credits'
import { returnData } from '@/domain/Utils'
import { Request } from 'express'

export class CreditsController {
  constructor(private credit: CreditsService) {
    this.credit = credit
  }

  async parseFetchItens(req: Request): Promise<{ filters: filterCredit, order: orderCreditValue, itemsPerPage: number }> {
    let itemsPerPage = 100
    itemsPerPage = req.body.itemsPerPage ? req.body.itemsPerPage : itemsPerPage
    const { order, filters } = req.body
    return { filters, order, itemsPerPage }
  }

  async fetch(req: Request): Promise<returnData> {
    const { filters, order, itemsPerPage } = await this.parseFetchItens(req)
    return await this.credit.fetch(filters, order, itemsPerPage)
  }

}