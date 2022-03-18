import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  JoinColumn,
} from 'typeorm'
import { ScheduleFinancials } from './ScheduleFinancials'
import { Tasks } from './Tasks'

@Entity()
export class Users extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  login?: string

  @Column()
  password ?: string

  @Column()
  name?: string

  @Column({ length: 15 })
  document?: string

  @Column({ length: 100 })
  email?: string

  @OneToMany(() => Tasks, tasks => tasks.user_id)
  tasks?: Tasks[]

  @OneToMany(() => ScheduleFinancials, schedule => schedule.user_id)
  schedules?: ScheduleFinancials[]
}