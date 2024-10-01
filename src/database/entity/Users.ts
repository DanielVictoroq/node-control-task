import { Task } from '@/domain/Tasks'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm'
import { ScheduleFinancials } from './Schedules'
import { Tasks } from './Tasks'

@Entity('users')
export class Users extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column({ unique: true })
  login?: string

  @Column()
  password?: string

  @Column()
  name?: string

  @Column({ length: 15 })
  document?: string

  @Column({ length: 100, unique: true })
  email?: string

  @OneToMany(() => Tasks, tasks => tasks.user_id)
  tasks?: Task[]

  @OneToMany(() => ScheduleFinancials, schedule => schedule.userId)
  schedules?: ScheduleFinancials[]
}
