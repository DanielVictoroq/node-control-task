import { DebtMapper } from '@/database'
import Joi, { Schema } from 'joi'

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
  private static readonly schema = Joi.object({
    id: Joi.number(),
    title: Joi.string().min(1).max(60).required(),
    description: Joi.string().min(1).max(250),
    value: Joi.number().required(),
    dtDebt: Joi.date().required(),
    qtdPlots: Joi.number(),
    typeDebtsId: Joi.number().required(),
    userId: Joi.number().required(),
    createdAt: Joi.date().max('now'),
    updatedAt: Joi.date().min(Joi.ref('createdAt')).max('now'),
    deletedAt: Joi.date().min(Joi.ref('createdAt')).max('now'),
  })

  public id?: number
  public title?: string
  public description?: string
  public value?: number
  public dtDebt?: Date
  public qtdPlots?: number
  public typeDebtsId?: number
  public userId?: number
  public createdAt?: Date
  public updatedAt?: Date
  public deletedAt?: Date

  constructor(input: Debt, validate: boolean | 'partial' = true) {
    if (validate) {
      let schema = Debt.schema
      if (validate == 'partial') {
        schema = schema.fork(['id'], (subSchema: Schema): Schema => subSchema.optional())
      }

      const result = schema.validate(input)

      if (result.error) {
        throw new Error(result.error.message)
      }
    }

    Object.assign(this, input)
  }

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

export function makeDebt(input: DebtMapper): Debt {
  return new Debt({ ...input })
}