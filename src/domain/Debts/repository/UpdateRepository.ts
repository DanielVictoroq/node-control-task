import { returnData } from '@/domain/Utils'
import { Debt } from '@/domain/Debts'
import { defaultDataSource, DebtMapper } from '@/database'

export interface IUpdateRepository {
  update(id: number, options: Debt): Promise<returnData>
}

export class UpdateRepository implements IUpdateRepository {
  async update(id: number, debt: Debt): Promise<returnData> {
    const entity: DebtMapper = Object.assign(new DebtMapper(), { ...debt, id: undefined })
    return { status: 200, entity: await defaultDataSource.manager.update(DebtMapper, id, entity) }
  }
}