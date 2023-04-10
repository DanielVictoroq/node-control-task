import { CreditsService, filterCredit, orderCreditValue } from '@/domain/Credits'
import { returnData } from '@/domain/Utils'
import { Request } from 'express'

export class CreditsController {
  constructor(private credit: CreditsService) {
    this.credit = credit
  }

  async parseFetchItens(req: Request): Promise<{ filters: filterCredit, order: orderCreditValue, itemsPerPage: number }> {
    let itemsPerPage = 100
    itemsPerPage = req.body.itemsPerPage ? req.body.itemsPerPage : itemsPerPage
    const { order, filters } = req.body
    return { filters, order, itemsPerPage }
  }

  async fetch(req: Request): Promise<returnData> {
    const { filters, order, itemsPerPage } = await this.parseFetchItens(req)
    return await this.credit.fetch(filters, order, itemsPerPage)
  }

  async create(req: Request): Promise<returnData> {
    const credit = {
      title: req.body.title ?? req.body.title,
      description: req.body.description ?? req.body.description,
      value: req.body.value ?? req.body.value,
      dtCredit: req.body.dtDebt ?? req.body.dt_credit,
      qtdRepeat: req.body.qtdPlots ?? req.body.qtd_repeat,
      typeCreditsId: req.body.typeDebtsId ? parseInt(req.body.type_credits_id) : undefined,
      userId: req.body.userId ? parseInt(req.body.user_id) : undefined,
    }

    return await this.credit.create(credit)
  }

  async update(req: Request): Promise<returnData> {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
      return { status: 500, message: 'Houve um problema ao efetuar a atualização' }
    }

    if (Object.keys(req.body).length === 0) {
      return { status: 401, message: 'Não informado nenhum dado para ser atualizado' }
    }

    const credit = {
      id: id,
      title: req.body.title ?? req.body.title,
      description: req.body.description ?? req.body.description,
      value: req.body.value ?? req.body.value,
      dtCredit: req.body.dtDebt ?? req.body.dt_credit,
      qtdRepeat: req.body.qtdPlots ?? req.body.qtd_repeat,
      typeCreditsId: req.body.typeDebtsId ? parseInt(req.body.type_credits_id) : undefined,
      userId: req.body.userId ? parseInt(req.body.user_id) : undefined,
    }

    return await this.credit.update(id, credit)
  }

  async delete(req: Request): Promise<returnData> {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
      return { status: 500, message: 'Houve um problema ao deletar a débito' }
    }

    return await this.credit.delete(id)
  }
}