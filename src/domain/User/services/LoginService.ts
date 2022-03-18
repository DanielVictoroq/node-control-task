import { UserRepository } from '@/domain/User'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
export class LoginService {
  private repository

  constructor(userRepo: UserRepository) {
    this.repository = userRepo
  }

  async login(req: Request, res: Response): Promise<Response> {
    const user = await this.repository.findLogin(req.body.login)
    console.log(req.body, user.data)
    if (req.body.password === user.data.password) {

      const token = jwt.sign({
        name: user.data.name,
        document: user.data.document,
      }, `${process.env.JWT_SECRET}`, {
        expiresIn: 6000,

      })
      return res.json({ auth: true, token: token })
    }

    return res.json({ status: 500, message: 'Login inválido!' })
  }
}