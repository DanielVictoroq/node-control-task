import { UserRepository } from '@/domain/User'
import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { decode } from 'punycode'
export class LoginService {
  private repository

  constructor(userRepo: UserRepository) {
    this.repository = userRepo
  }

  async login(req: Request, res: Response): Promise<Response> {
    if (req.body.login === 'danielvoq' && req.body.password === '123456') {
      const user = await this.repository.findLogin(req.body.login, req.body.password)
      const token = jwt.sign({
        name: user.data.name,
        document: user.data.document,
      }, `${process.env.JWT_SECRET}`, {
        expiresIn: 10,
      })
      return res.json({ auth: true, token: token })
    }

    return res.json({ status: 500, message: 'Login inválido!' })
  }
}