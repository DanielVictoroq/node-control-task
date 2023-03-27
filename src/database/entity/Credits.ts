import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm'
import { Types } from './Types'
import { Users } from './Users'

@Entity()
export class Credits extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column({ length: 100 })
  title?: string

  @Column('longtext', { nullable: true })
  description?: string

  @Column('decimal', { precision: 11, scale: 2 })
  value?: number

  @Column({name: 'dt_credit'})
  dtCredit?: Date

  @Column({ nullable: true })
  qtdRepeat?: number

  @ManyToOne(() => Types, type => type.id)
  @JoinColumn({name: 'type_credits_id'})
  typeCreditsId?: Types

  @ManyToOne(() => Users, users => users.id)
  @JoinColumn({name: 'user_id'})
  userId?: Users

  @Column({ nullable: true })
  createdAt?: Date

  @Column({ nullable: true, default: new Date() })
  updatedAt?: Date

}
