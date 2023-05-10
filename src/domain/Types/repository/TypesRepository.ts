import { defaultDataSource, Types as TypesOrm } from '@/database'
import { IType, makeTypes, returnDataTypes, filterType, orderTypeValue } from '@/domain/Types'

interface ITypesRepository {
  fetch(filters?: filterType, order?: orderTypeValue, itemsPerPage?: number): Promise<returnDataTypes>
}

export class TypesRepository implements ITypesRepository {

  async fetch(filters?: filterType, order?: orderTypeValue, itemsPerPage?: number): Promise<returnDataTypes> {
    const [dataFind, total] = await defaultDataSource.manager.findAndCount(TypesOrm, {
      where: filters,
      order,
      take: itemsPerPage,
    })

    const data = new Array(dataFind.length)

    for (let i = 0; i < dataFind.length; i++) {
      data[i] = makeTypes(dataFind[i] as unknown as IType)
    }
    return { data, total }
  }
}