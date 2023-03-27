import { Debt, DebtsService, filterDebt, orderDebtValue } from '@/domain/Debts'
import { returnData } from '@/domain/Utils'
import { Request } from 'express'

export class DebtsController {
  private debts: DebtsService

  constructor(debts: DebtsService) {
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
    const dbt = new Debt(
      req.body.id,
      req.body.title,
      req.body.description,
      req.body.value,
      req.body.dt_debt,
      req.body.qtd_plots,
      req.body.type_debts_id,
      req.body.user_id,
      new Date(),
      new Date(),
    )

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
    const debt = new Debt(
      req.body.id ?? req.body.id,
      req.body.title ?? req.body.title,
      req.body.description ?? req.body.description,
      req.body.value ?? req.body.value,
      req.body.dt_debt ?? req.body.dt_debt,
      req.body.qtd_plots ?? req.body.qtd_plots,
      req.body.type_debts_id ? parseInt(req.body.type_debts_id) : undefined,
      req.body.user_id ? parseInt(req.body.user_id) : undefined,
      new Date(),
    )
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