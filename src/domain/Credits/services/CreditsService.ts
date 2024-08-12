import { CreditsRepository, filterCredit, orderCreditValue } from '@/domain/Credits'
import { returnData } from '@/domain/Utils'

export class CreditsService {

  constructor(private creditRepo: CreditsRepository) {
    this.creditRepo = creditRepo
  }

  async fetch(filters?: filterCredit, order?: orderCreditValue, itemsPerPage?: number): Promise<returnData> {
    return await this.creditRepo.fetch(
      filters,
      order,
      itemsPerPage,
    )
  }

  async create(creditModel: Record<string, unknown>): Promise<returnData> {
    try {
      return await this.creditRepo.create(creditModel)
    } catch (err) {
      return { status: 500, message: (err as Error).message }
    }
  }

  async update(id: number, creditModel: object): Promise<returnData> {
    try {
      return await this.creditRepo.update(id, creditModel)
    } catch (err) {
      return { status: 422, message: (err as Error).message }
    }
  }

  async delete(id: number): Promise<returnData> {
    try {
      return await this.creditRepo.delete(id)
    } catch (err) {
      return { status: 422, message: (err as Error).message }
    }
  }
}