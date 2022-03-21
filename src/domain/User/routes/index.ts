import { UserController, UserCreateValidate } from '@/domain/User'
import { Router, Response, Request } from 'express'
import { ApiMiddleware } from '@/middlewares'

export function routesUsers(
  users: UserController,
): Router {

  const router = Router()

  router.get('/', ApiMiddleware, async (req: Request, res: Response) => {
    res.send(await users.list(res))
  })

  router.post('/criar-usuario', ApiMiddleware, UserCreateValidate, async (req: Request, res: Response) => {
    return await users.createUser(req, res)
  })

  return router
}
