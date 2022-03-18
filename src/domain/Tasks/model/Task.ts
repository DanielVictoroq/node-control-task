import { ITask } from '@/domain/Tasks'

export class Task implements ITask {
  _title: string
  _description: string
  _dt_task: Date
  _type_task_id: number
  _debt_id: number
  _credt_id: number
  _user_id: number
  _created_at: Date
  _updated_at: Date
  _deleted_at: Date

  constructor() {
    this._title = ''
    this._description = ''
    this._dt_task = new Date
    this._type_task_id = 0
    this._debt_id = 0
    this._credt_id = 0
    this._user_id = 0
    this._created_at = new Date
    this._updated_at = new Date
    this._deleted_at = new Date
  }

  get title() {
    return this._title
  }
}