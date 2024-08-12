import { filterDebt, DebtsRepository, Debt, orderDebtValue } from '@/domain/Debts'
import { findOptions, returnData } from '@/domain/Utils'

interface IDebtService {
  fetch(options?: findOptions): Promise<returnData>
  create(debt: Debt): Promise<returnData>
  update(id: number, debt: Debt): Promise<returnData>
  delete(id: number): Promise<returnData>
}
export class DebtsService implements IDebtService {
  private debtsRepo: DebtsRepository

  constructor(debtsRepo: DebtsRepository) {
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

  async create(debtModel: Record<string, unknown>): Promise<returnData> {
    try {
      return await this.debtsRepo.create(debtModel)
    } catch (err) {
      return { status: 500, message: (err as Error).message }
    }
  }

  async update(id: number, debtModel: object): Promise<returnData> {
    try {
      return await this.debtsRepo.update(id, debtModel)
    } catch (err) {
      return { status: 422, message: (err as Error).message }
    }
  }

  async delete(id: number): Promise<returnData> {
    try {
      return await this.debtsRepo.delete(id)
    } catch (err) {
      return { status: 422, message: (err as Error).message }
    }
  }
}