export class Debt {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public value?: number,
    public dtDebt?: Date,
    public qtdPlots?: number,
    public typeDebtsId?: number,
    public userId?: number,
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
