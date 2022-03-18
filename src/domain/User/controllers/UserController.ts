import { UserRepository, returnDataUsers } from '@/domain/User'

export class UserController {
  private userRepo: UserRepository

  constructor(userRepo: UserRepository) {
    this.userRepo = userRepo
  }

  async list(res?: unknown): Promise<returnDataUsers> {
    return await this.userRepo.find(1)
  }

  async insereTipo(res: any, bodyReq: any) {
    return await this.userRepo.find(1)
  }
}