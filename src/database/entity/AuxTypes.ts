import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
} from 'typeorm'

@Entity()
export class AuxTypes extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column({length: 100})
  name?: string

}
