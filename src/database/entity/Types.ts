import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
  JoinColumn,
} from 'typeorm'
import { AuxTypes } from './'

@Entity()
export class Types extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name?: string

  @Column({ name: 'type_id' })
  typeId?: number

  @OneToOne(() => AuxTypes, auxType => auxType.id)
  @JoinColumn({ name: 'type_id' })
  auxTypes?: AuxTypes
}
