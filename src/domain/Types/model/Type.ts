import { IType } from '@/domain/Types'

export class Type implements IType {

  constructor(
    public id: number,
    public name: string,
    public aux_types_id: number,
  ) { }
}

export type returnDataTypes = {
  data: Type[]
}

export function makeTypes(input: IType): Type {
  const type = new Type(
    input.id,
    input.name,
    input.aux_types_id,
  )
  return type
}