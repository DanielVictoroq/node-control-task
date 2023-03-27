import { returnDataUsers, UserService } from '@/domain/User'
import { Request, Response } from 'express'
import { hashSync } from 'bcrypt'
import { User } from '../model'

export class UserController {
  private userService: UserService

  constructor(userService: UserService) {
    this.userService = userService
  }

  async find(req: Request): Promise<returnDataUsers> {
    const id = parseInt(req.params?.id)
    return await this.userService.find(id)
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const user = new User(
      req?.body.id,
      req?.body.name,
      req?.body.login,
      hashSync(req?.body.password, 8),
      req?.body.document,
      req?.body.email,
    )
    return await this.userService.create(user, res)
  }
}