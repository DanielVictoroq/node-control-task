import { Type } from '@/domain/Types'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm'
import { Types } from './Types'
import { Users } from './Users'

@Entity('debts')
export class DebtMapper extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column({ length: 100 })
  title!: string

  @Column('longtext', { nullable: true })
  description?: string

  @Column('decimal', { precision: 11, scale: 2 })
  value!: number

  @Column({ name: 'dt_debt' })
  dtDebt!: Date

  @Column({ name: 'qtd_plots', nullable: true })
  qtdPlots?: number

  @Column({ name: 'type_debts_id' })
  typeDebtsId!: number

  @OneToOne(() => Types, type => type.id)
  @JoinColumn({ name: 'type_debts_id' })
  typeDebt?: Type

  @Column({ name: 'user_id' })
  userId!: number

  @ManyToOne(() => Users, users => users.id)
  @JoinColumn({ name: 'user_id' })
  user?: Users

  @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt?: Date

}
