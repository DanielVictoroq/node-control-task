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

  @Column()
  dt_credit?: Date

  @Column({ nullable: true })
  qtd_repeat?: number

  @ManyToOne(() => Types, type => type.id)
  @JoinColumn({name: 'type_credits_id'})
  type_credits_id?: Types

  @ManyToOne(() => Users, users => users.id)
  @JoinColumn({name: 'user_id'})
  user_id?: Users

  @Column({ nullable: true })
  created_at?: Date

  @Column({ nullable: true, default: new Date() })
  updated_at?: Date

}
