import {
  LoginService,
} from '@/domain/User'
import { Request, Response } from 'express'

export class LoginController {
  private loginService: LoginService

  constructor(loginService: LoginService) {
    this.loginService = loginService
  }

  async login(req: Request, res: Response): Promise<Response> {
    return await this.loginService.login(req, res)
  }

}