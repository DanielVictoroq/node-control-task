import { returnData } from '@/domain/Utils'
import { defaultDataSource, DebtMapper } from '@/database'

interface IDeleteRepository {
  delete(id: number): Promise<returnData>
}

export class DeleteRepository implements IDeleteRepository {

  async delete(id: number): Promise<returnData> {
    return { status: 200, entity: await defaultDataSource.manager.delete(DebtMapper, id) }
  }
}