import { Debt, ICreateDebtService } from '@/domain/Debts'
import { returnData } from '@/domain/Utils'
import { Request } from 'express'

export class CreateDebtController {
  constructor(private debts: ICreateDebtService) {
    this.debts = debts
  }

  async create(req: Request): Promise<returnData> {
    const dbt: Debt = {
      title: req.body.title ?? req.body.title,
      description: req.body.description ?? req.body.description,
      value: req.body.value ?? req.body.value,
      dtDebt: req.body.dtDebt ?? req.body.dt_debt,
      qtdPlots: req.body.qtdPlots ?? req.body.qtd_plots,
      typeDebtsId: req.body.typeDebtsId ? parseInt(req.body.type_debts_id) : undefined,
      userId: req.body.userId ? parseInt(req.body.user_id) : undefined,
    }

    return await this.debts.create(dbt)
  }
}