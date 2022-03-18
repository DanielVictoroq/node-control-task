import { UserRepository, returnDataUsers } from '@/domain/User'
import { ApiMiddleware } from '@/middlewares'

export class LoginController {
  private userRepo: UserRepository

  constructor(userRepo: UserRepository) {
    this.userRepo = userRepo
  }

  async login(res?: unknown): Promise<returnDataUsers> {
    return await this.userRepo.list(1)
  }

  async insereTipo(res: any, bodyReq: any) {
    return await this.userRepo.list(1)
  }
}