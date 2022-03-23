import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  JoinColumn,
  ManyToOne,
} from 'typeorm'

import {
  Credits,
  Debts,
  Types,
  Users,
} from '@/database/entity'

@Entity()
export class Tasks extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name?: string

  @Column()
  description?: string

  @Column()
  dt_task?: Date

  @ManyToOne(() => Debts, debts => debts.id)
  @JoinColumn({ name: 'debt_id' })
  debt_id?: Debts

  @ManyToOne(() => Credits, credits => credits.id)
  @JoinColumn({ name: 'credit_id' })
  credit_id?: Credits

  @ManyToOne(() => Types, type => type.id)
  @JoinColumn({ name: 'type_task_id' })
  type_task_id?: Types

  @ManyToOne(() => Users, users => users.tasks)
  @JoinColumn({ name: 'user_id' })
  user_id?: Users

  @Column({ default: new Date() })
  created_at?: Date

  @Column({ default: new Date(), nullable: true })
  updated_at?: Date

}
