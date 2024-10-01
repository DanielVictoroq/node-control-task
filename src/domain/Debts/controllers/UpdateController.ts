import { IUpdateDebtService } from '@/domain/Debts'
import { returnData } from '@/domain/Utils'
import { Request } from 'express'

export class UpdateDebtController {
  constructor(private debts: IUpdateDebtService) {
    this.debts = debts
  }

  async update(req: Request): Promise<returnData> {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
      return { status: 500, message: 'Houve um problema ao efetuar a atualização' }
    }

    if (Object.keys(req.body).length === 0) {
      return { status: 401, message: 'Não informado nenhum dado para ser atualizado' }
    }

    const debt = {
      id: id,
      title: req.body.title ?? req.body.title,
      description: req.body.description ?? req.body.description,
      value: req.body.value ?? req.body.value,
      dtDebt: req.body.dtDebt ?? req.body.dt_debt,
      qtdPlots: req.body.qtdPlots ?? req.body.qtd_plots,
      typeDebtsId: req.body.typeDebtsId ? parseInt(req.body.type_debts_id) : undefined,
      userId: req.body.userId ? parseInt(req.body.user_id) : undefined,
    }

    return await this.debts.update(id, debt)
  }
}