import { Debts } from '@/database'
import { Type } from '@/domain/Types'
import { User } from '@/domain/User'

export interface IDebt {
  id?: number,
  title?: string,
  description?: string,
  value?: number,
  dtDebt?: Date,
  qtdPlots?: number,
  typeDebtsId?: number,
  userId?: number,
  createdAt?: Date,
  updatedAt?: Date,
}

export class Debt {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public value?: number,
    public dtDebt?: Date,
    public qtdPlots?: number,
    public typeDebtsId?: Type,
    public userId?: User,
    public createdAt?: Date,
    public updatedAt?: Date,
  ) { }
}

export const filterDebtFields = ['dt_debt', 'user_id', 'value', 'qtd_plots']

export type filterDebt = {
  [key in typeof filterDebtFields[number]]?: string
}

export const orderDebtFields = ['dt_debt']
type orderDirection = 'ASC' | 'DESC'

export type orderDebtValue = {
  [key in typeof orderDebtFields[number]]?: orderDirection
}

export function makeDebt(input: Debts): Debt {
  return new Debt(
    input?.id,
    input?.title,
    input?.description,
    input?.value,
    input?.dtDebt,
    input?.qtdPlots,
    input?.typeDebtsId,
    input?.userId,
    input?.createdAt,
    input?.updatedAt,
  )
}