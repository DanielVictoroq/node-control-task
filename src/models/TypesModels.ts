import { ITypesModels } from '@/interface'

export class TypesModels implements ITypesModels {

  _name: string
  _types_id: number
  _created_at: Date
  _updated_at: Date

  constructor() {
    this._name = ''
    this._types_id = 0
    this._created_at = new Date
    this._updated_at = new Date
  }

  get name() {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }

  get typeId() {
    return this._types_id
  }

  set typeId(types_id: number) {
    this._types_id = types_id
  }

  get created_at() {
    return this._created_at
  }

  set created_at(created_at: Date) {
    this._created_at = created_at
  }

  get updated_at() {
    return this._updated_at
  }

  set updated_at(updated_at: Date) {
    this._updated_at = updated_at
  }
}