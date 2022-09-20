import { Debt } from '../model'

export interface IDebt {
  id?: number,
  title?: string,
  description?: string,
  value?: number,
  dt_debt?: Date,
  qtd_plots?: number,
  type_debts_id?: number,
  user_id?: number,
  created_at?: Date,
  updated_at?: Date,
}

export function makeDebt(input: IDebt): Debt {
  return new Debt(
    input?.id,
    input?.title,
    input?.description,
    input?.value,
    input?.dt_debt,
    input?.qtd_plots,
    input?.type_debts_id,
    input?.user_id,
    input?.created_at,
    input?.updated_at,
  )
}