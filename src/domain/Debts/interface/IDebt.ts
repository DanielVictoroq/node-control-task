import { Debt } from '../model'

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

export function makeDebt(input: IDebt): Debt {
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