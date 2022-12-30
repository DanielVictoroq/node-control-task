import { Debts } from '@/database/entity'
import { findOptions, returnData } from '@/domain/Utils'
import { DeepPartial, DeleteResult, SelectQueryBuilder, UpdateResult } from 'typeorm'
import { Debt, filterDebt, orderDebtValue, IDebt, makeDebt } from '@/domain/Debts'

interface IDatabaseEntity {
  findOne(id: number): Promise<Debts>
  findAndCount(options?: findOptions): Promise<[unknown[], number]>
  create(entityLike: DeepPartial<Debt>): Debts;
  save(options?: Debt): Promise<Debt>
  update(id: number, alias: DeepPartial<Debts>): Promise<UpdateResult>
  createQueryBuilder(alias?: string): SelectQueryBuilder<Debts>
  delete(id: number): Promise<DeleteResult>
}

export class DebtsRepository {
  private database: IDatabaseEntity

  constructor(database: IDatabaseEntity) {
    this.database = database
  }

  async fetch(
    filters?: filterDebt,
    order?: orderDebtValue,
    itemsPerPage?: number,
  ): Promise<returnData> {
    const [findDebt] = await this.database.findAndCount({ where: filters, order, take: itemsPerPage })
    const debt = new Array(findDebt.length)

    for (let i = 0; i < findDebt.length; i++) {
      debt[i] = makeDebt(findDebt[i] as IDebt)
    }
    return { status: 200, entity: debt }
  }

  async create(entity: Debt): Promise<returnData> {
    return { status: 200, entity: await this.database.save(entity) }
  }

  async update(id: number, data: Debt): Promise<returnData> {
    const updateDebt = this.database.create({
      title: data?.title,
      dtDebt: data?.dtDebt,
      description: data?.description,
      value: data?.value,
      qtdPlots: data?.qtdPlots,
      typeDebtsId: data?.typeDebtsId,
      userId: data?.userId,
      updatedAt: data?.updatedAt,
    })

    return { status: 200, entity: await this.database.update(id, updateDebt) }
  }

  async delete(id: number): Promise<returnData> {
    return { status: 200, entity: await this.database.delete(id) }
  }
}