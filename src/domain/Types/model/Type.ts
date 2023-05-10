export interface IType {
  id: number
  name: string
}

export class Type implements IType {

  constructor(
    public id: number,
    public name: string,
  ) { }
}

export type returnDataTypes = {
  data: Type[]
  total: number
}

export function makeTypes(input: IType): Type {
  const type = new Type(
    input.id,
    input.name,
  )
  return type
}

export const filterTypeFields = ['name', 'description', 'debt_id']

export type filterType = {
  [key in typeof filterTypeFields[number]]?: string
}

export const orderTypeFields = ['name', 'type_task_id']
type orderDirection = 'ASC' | 'DESC'

export type orderTypeValue = {
  [key in typeof orderTypeFields[number]]?: orderDirection
}