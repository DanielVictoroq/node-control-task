import { CreateRepository, Debt } from '@/domain/Debts'
import { returnData } from '@/domain/Utils'

export interface ICreateDebtService {
  create(debt: Debt): Promise<returnData>
}
export class CreateDebtService implements ICreateDebtService {
  private debtsRepo: CreateRepository

  constructor(debtsRepo: CreateRepository) {
    this.debtsRepo = debtsRepo
  }

  async create(debtModel: Record<string, unknown>): Promise<returnData> {
    try {
      return await this.debtsRepo.create(debtModel)
    } catch (err) {
      return { status: 500, message: (err as Error).message }
    }
  }
}