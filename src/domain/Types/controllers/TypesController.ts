import { filterType, orderTypeValue, returnDataTypes, TypesRepository } from '@/domain/Types'
import { Request } from 'express'

export class TypesController {
  private typesRepo: TypesRepository

  constructor(typesRepo: TypesRepository) {
    this.typesRepo = typesRepo
  }

  async parseFetchItens(req: Request): Promise<{ filters: filterType, order: orderTypeValue, itemsPerPage: number }> {
    let itemsPerPage = 100
    itemsPerPage = req.body?.itemsPerPage ? req.body?.itemsPerPage : itemsPerPage
    const { order, filters } = req.body
    return { filters, order, itemsPerPage }
  }

  async fetch(req: Request): Promise<returnDataTypes> {
    const { filters, order, itemsPerPage } = await this.parseFetchItens(req)
    return await this.typesRepo.fetch(filters, order, itemsPerPage)
  }
}