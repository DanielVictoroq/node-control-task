import { Credits } from '@/database'
import { Type } from '@/domain/Types'
import { User } from '@/domain/User'

export interface ICredit {
  title: string,
  description: string,
  value: number,
  dtCredit: Date,
  qtdRepeat?: number,
  typeCreditsId: number,
  userId: number,
  createdAt?: Date,
  updatedAt?: Date,
  deletedAt?: Date,
  id?: number,
}

export class Credit {
  constructor(
    public title?: string,
    public description?: string,
    public value?: number,
    public dtCredit?: Date,
    public typeCreditsId?: Type,
    public userId?: User,
    public qtdRepeat?: number,
    public createdAt?: Date,
    public updatedAt?: Date,
    public id?: number,
  ) { }
}

export const filterCreditFields = ['dtCredit', 'userId', 'value']

export type filterCredit = {
  [key in typeof filterCreditFields[number]]?: string
}

export const orderCreditFields = ['dt']
type orderDirection = 'ASC' | 'DESC'

export type orderCreditValue = {
  [key in typeof orderCreditFields[number]]?: orderDirection
}

export function makeCredit(input: Credits): Credit {
  return new Credit(
    input?.title,
    input?.description,
    input?.value,
    input?.dtCredit,
    input?.typeCreditsId,
    input?.userId,
    input?.qtdRepeat,
    input?.createdAt,
    input?.updatedAt,
    input?.id,
  )
}