import { LoginController, LoginValidate } from '@/domain/User'
import { Router, Response, Request } from 'express'

export function routesAll(
  login: LoginController,
): Router {

  const router = Router()

  router.get('/', (req: Request, res: Response) => {
    res.send('OK')
  })

  router.post('/login', LoginValidate, async (req: Request, res: Response) => {
    return await login.login(req, res)
  })

  return router
}
