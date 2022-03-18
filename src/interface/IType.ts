import { Types } from '@/database/entity'
import { Type } from '@/models'

export interface IType {
  id: number
  name: string
  aux_types_id: number
}
