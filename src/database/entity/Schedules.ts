import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm'

import {
  Credits,
  DebtMapper,
  Tasks,
  Users,
} from '@/database/entity'

@Entity()
export class ScheduleFinancials extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column({ name: 'dt_schedule' })
  dtSchedule!: Date

  @Column({ name: 'debt_id' })
  debtId?: number

  @OneToOne(() => DebtMapper, debts => debts.id)
  @JoinColumn({ name: 'debt_id' })
  debts?: DebtMapper[]

  @Column({ name: 'credit_id' })
  creditId?: number

  @OneToOne(() => Credits, credits => credits.id)
  @JoinColumn({ name: 'credit_id' })
  credit?: Credits

  @Column({ name: 'task_id' })
  taskId?: number

  @OneToOne(() => Tasks, tasks => tasks.id)
  @JoinColumn({ name: 'task_id' })
  task?: Tasks

  @Column({ name: 'user_id' })
  userId!: number

  @ManyToOne(() => Users, users => users.schedules)
  @JoinColumn({ name: 'user_id' })
  users?: Users

  @Column({ nullable: true })
  createdAt?: Date

}
