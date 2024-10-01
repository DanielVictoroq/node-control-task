import { UpdateRepository, Debt } from '@/domain/Debts'
import { returnData } from '@/domain/Utils'

export interface IUpdateDebtService {
  update(id: number, debt: Debt): Promise<returnData>
}

export class UpdateDebtService implements IUpdateDebtService {
  private debtsRepo: UpdateRepository

  constructor(debtsRepo: UpdateRepository) {
    this.debtsRepo = debtsRepo
  }

  async update(id: number, debtModel: object): Promise<returnData> {
    try {
      return await this.debtsRepo.update(id, debtModel)
    } catch (err) {
      return { status: 422, message: (err as Error).message }
    }
  }
}