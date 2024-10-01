import { DeleteRepository } from '@/domain/Debts'
import { returnData } from '@/domain/Utils'

export interface IDeleteDebtService {
  delete(id: number): Promise<returnData>
}
export class DeleteDebtService implements IDeleteDebtService {
  private debtsRepo: DeleteRepository

  constructor(debtsRepo: DeleteRepository) {
    this.debtsRepo = debtsRepo
  }

  async delete(id: number): Promise<returnData> {
    try {
      return await this.debtsRepo.delete(id)
    } catch (err) {
      return { status: 422, message: (err as Error).message }
    }
  }
}