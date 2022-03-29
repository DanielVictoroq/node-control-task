export class Debt {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public value?: number,
    public dt_debt?: Date,
    public qtd_plots?: number,
    public type_debts_id?: number,
    public user_id?: number,
    public created_at?: Date,
    public updated_at?: Date,
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
