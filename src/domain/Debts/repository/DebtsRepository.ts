import { returnData } from '@/domain/Utils'
import { Debt, filterDebt, orderDebtValue, makeDebt } from '@/domain/Debts'
import { defaultDataSource, Debts } from '@/database'

interface IDebtsRepository {
  fetch(
    filters?: filterDebt,
    order?: orderDebtValue,
    itemsPerPage?: number,
  ): Promise<returnData>
  create(entity: Debt): Promise<returnData>
  update(id: number, options: Debt): Promise<returnData>
  delete(id: number): Promise<returnData>
}

export class DebtsRepository implements IDebtsRepository {
  async fetch(
    filters?: filterDebt,
    order?: orderDebtValue,
    itemsPerPage?: number,
  ): Promise<returnData> {
    const [findDebt] = await defaultDataSource.manager.findAndCount(Debts, { where: filters, order, take: itemsPerPage })
    const debts = new Array(findDebt.length)
    findDebt.forEach((debt: Debts) => debts.push(makeDebt(debt)))
    return { status: 200, entity: debts }
  }

  async create(debt: Debt): Promise<returnData> {
    const entity: Debts = Object.assign(new Debts(), { ...debt, id: undefined })
    return { status: 200, entity: await defaultDataSource.manager.save(entity) }
  }

  async update(id: number, debt: Debt): Promise<returnData> {
    const entity: Debts = Object.assign(new Debts(), { ...debt, id: undefined })
    return { status: 200, entity: await defaultDataSource.manager.update(Debts, id, entity) }
  }

  async delete(id: number): Promise<returnData> {
    return { status: 200, entity: await defaultDataSource.manager.delete(Debts, id) }
  }
}