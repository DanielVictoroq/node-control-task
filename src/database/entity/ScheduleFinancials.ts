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
  Tasks,
  Users,
} from '@/database/entity'

@Entity()
export class ScheduleFinancials extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  dt_schedule?: Date

  @ManyToOne(() => Debts, debts => debts.id)
  @JoinColumn({name: 'debt_id'})
  debt_id?: Debts

  @ManyToOne(() => Credits, credits => credits.id)
  @JoinColumn({name: 'credit_id'})
  credit_id?: Credits

  @ManyToOne(() => Tasks, tasks => tasks.id)
  @JoinColumn({name: 'task_id'})
  task_id?: Tasks

  @ManyToOne(() => Users, users => users.schedules)
  @JoinColumn({name: 'user_id'})
  user_id?: Users

  @Column({ nullable: true })
  created_at?: Date

}
