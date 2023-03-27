import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  JoinColumn,
  ManyToOne,
} from 'typeorm'
import { Types } from './Types'
import { Users } from './Users'

@Entity()
export class Debts extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column({ length: 100 })
  title?: string

  @Column('longtext', { nullable: true })
  description?: string

  @Column('decimal', { precision: 11, scale: 2 })
  value?: number

  @Column({ name: 'dt_debt' })
  dtDebt?: Date

  @Column({ name: 'qtd_plots', nullable: true })
  qtdPlots?: number

  @ManyToOne(() => Types, type => type.id)
  @JoinColumn({ name: 'type_debts_id' })
  typeDebtsId?: Types

  @ManyToOne(() => Users, users => users.id)
  @JoinColumn({ name: 'user_id' })
  userId?: Users

  @Column({ name: 'created_at', nullable: true })
  createdAt?: Date

  @Column({ name: 'updated_at', nullable: true, default: new Date() })
  updatedAt?: Date

}
