import { filterDebt, DebtsRepository, Debt, orderDebtValue } from '@/domain/Debts'
import { findOptions, returnData } from '@/domain/Utils'
import { getConnection } from 'typeorm'
// import { orderValue, Task } from '../model'

interface IDebtService {
  fetch(options?: findOptions): Promise<returnData>
  create(debt: Debt): Promise<returnData>
  update(id: number, debt: Debt): Promise<returnData>
  delete(id: number): Promise<returnData>
}
export class DebtsService implements IDebtService {
  private debtsRepo: DebtsRepository

  constructor(debtsRepo: DebtsRepository) {
    this.debtsRepo = debtsRepo
  }

  async fetch(
    filters?: filterDebt,
    order?: orderDebtValue,
    itemsPerPage?: number,
  ): Promise<returnData> {

    return await this.debtsRepo.fetch(
      filters,
      order,
      itemsPerPage,
    )
  }

  async create(debtModel: Debt): Promise<returnData> {
    const connection = getConnection()
    try {
      await connection.query('START TRANSACTION;')
      const { status, message, entity } = await this.debtsRepo.create(debtModel)
      await connection.query('COMMIT;')
      return { status, message, entity }
    } catch (err) {
      await connection.query('ROLLBACK;')
      return { status: 500, message: 'Houve um problema ao criar a tarefa' }
    }
  }

  async update(id: number, debtModel: Debt): Promise<returnData> {
    const connection = getConnection()
    try {
      await connection.query('START TRANSACTION;')
      const { status, message, entity } = await this.debtsRepo.update(id, debtModel)
      await connection.query('COMMIT;')
      return { status, message, entity }
    } catch (err) {
      await connection.query('ROLLBACK;')
      return { status: 422, message: 'Houve um problema ao atualizar a tarefa' }
    }
  }

  async delete(id: number): Promise<returnData> {
    const connection = getConnection()
    try {
      await connection.query('START TRANSACTION;')
      const { status, message, entity } = await this.debtsRepo.delete(id)
      await connection.query('COMMIT;')
      return { status, message, entity }
    } catch (err) {
      await connection.query('ROLLBACK;')
      return { status: 422, message: 'Houve um problema ao deletar a tarefa' }
    }
  }
}