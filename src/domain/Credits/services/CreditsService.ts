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
}