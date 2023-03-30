import { DebtsService, filterDebt, orderDebtValue } from '@/domain/Debts'
import { returnData } from '@/domain/Utils'
import { Request } from 'express'

export class DebtsController {
  constructor(private debts: DebtsService) {
    this.debts = debts
  }

  async parseFetchItens(req: Request): Promise<{ filters: filterDebt, order: orderDebtValue, itemsPerPage: number }> {
    let itemsPerPage = 100
    itemsPerPage = req.body.itemsPerPage ? req.body.itemsPerPage : itemsPerPage
    const { order, filters } = req.body
    return { filters, order, itemsPerPage }
  }

  async fetch(req: Request): Promise<returnData> {
    const { filters, order, itemsPerPage } = await this.parseFetchItens(req)
    return await this.debts.fetch(filters, order, itemsPerPage)
  }

  async create(req: Request): Promise<returnData> {
    const dbt = {
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

  async delete(req: Request): Promise<returnData> {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
      return { status: 500, message: 'Houve um problema ao deletar a débito' }
    }

    return await this.debts.delete(id)
  }

}