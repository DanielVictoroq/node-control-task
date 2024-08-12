import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  JoinColumn,
  ManyToOne,
} from 'typeorm'
import { AuxTypes } from './AuxTypes'

@Entity()
export class Types extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name?: string

  @ManyToOne(() => AuxTypes, auxTypes => auxTypes.id)
  @JoinColumn({name: 'aux_types_id'})
  aux_types_id?: AuxTypes

}
