import { Users } from '@/database/entity'
import { returnDataUsers } from '@/models'
import { UserRepository } from '@/repository'

export class UserController {
  private userRepo: UserRepository

  constructor(userRepo: UserRepository) {
    this.userRepo = userRepo
  }

  async list(res?: unknown): Promise<returnDataUsers> {
    return await this.userRepo.list(1)
  }

  async insereTipo(res: any, bodyReq: any) {
    return await this.userRepo.list(1)
  }
}