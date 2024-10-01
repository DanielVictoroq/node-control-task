import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
} from 'typeorm'

@Entity('aux_types')
export class AuxTypes extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column({ length: 100 })
  name?: string

}
