import { Credit } from '../model'

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

export function makeCredit(input: ICredit): Credit {
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
    input?.deletedAt,
    input?.id,
  )
}