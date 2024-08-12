import { UserRepository } from '@/domain/User'
import { compareSync } from 'bcrypt'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
export class LoginService {
  private repository

  constructor(userRepo: UserRepository) {
    this.repository = userRepo
  }

  async login(req: Request, res: Response): Promise<Response> {
    const login = req.body.login
    return await this.repository.findCustom({ login })
      .then(user => {
        if (!user) return res.status(401).json({ message: 'Usuario não encontrado' })

        if (compareSync(req.body.password, `${user.user?.password}`)) {
          const token = jwt.sign(
            {
              name: user.user?.name,
              document: user.user?.document,
            },
            `${process.env.JWT_SECRET}`,
            {
              expiresIn: 6000,
            },
          )
          return res.status(200).json({ token: token })
        }
        return res.status(401).json({ message: 'Senha incorreta' })
      }).catch(err => {
        return res.status(500).json({ message: err.message })
      })
  }
}