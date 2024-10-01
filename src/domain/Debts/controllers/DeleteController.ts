import { IDeleteDebtService } from '@/domain/Debts'
import { returnData } from '@/domain/Utils'
import { Request } from 'express'

export class DeleteDebtController {
  constructor(private debts: IDeleteDebtService) {
    this.debts = debts
  }
  async delete(req: Request): Promise<returnData> {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
      return { status: 500, message: 'Houve um problema ao deletar a débito' }
    }

    return await this.debts.delete(id)
  }

}