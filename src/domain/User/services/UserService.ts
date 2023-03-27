import { UserRepository, returnDataUsers } from '@/domain/User'
import { Response } from 'express'
import { User } from '../model'
export class UserService {
  private userRepo: UserRepository

  constructor(userRepo: UserRepository) {
    this.userRepo = userRepo
  }

  async find(user_id: number ): Promise<returnDataUsers> {
    return await this.userRepo.find(user_id)
  }

  async create(user: User, res: Response): Promise<Response> {
    const userEmail = await this.userRepo.findCustom({ email: user.email })
    const userLogin = await this.userRepo.findCustom({ login: user.login })
    if (userLogin.user) return res.status(401).json({ message: 'Usuário utilizado já existe' })
    if (userEmail.user) return res.status(401).json({ message: 'E-mail já utilizado em nossa base de dados' })
    try {
      const userCreate = await this.userRepo.create(user)
      return res.status(200).json(userCreate)
    } catch (err) {
      return res.status(500).json('Erro ao criar o usuário')
    }
  }
}