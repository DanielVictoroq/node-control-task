export class Credit {

  constructor(
    public title: string,
    public description: string,
    public value: number,
    public dtCredit: Date,
    public typeCreditsId: number,
    public userId: number,
    public qtdRepeat?: number,
    public createdAt?: Date,
    public updatedAt?: Date,
    public deletedAt?: Date,
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
