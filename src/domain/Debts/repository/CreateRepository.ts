import { returnData } from '@/domain/Utils'
import { Debt } from '@/domain/Debts'
import { defaultDataSource, DebtMapper } from '@/database'

interface ICreateRepository {
  create(entity: Debt): Promise<returnData>
}

export class CreateRepository implements ICreateRepository {
  async create(debt: Debt): Promise<returnData> {
    const entity: DebtMapper = Object.assign(new DebtMapper(), { ...debt, id: undefined })
    return { status: 200, entity: await defaultDataSource.manager.save(entity) }
  }
}