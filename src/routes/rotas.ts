import { LoginController, UserController } from '@/domain/User'
import { TypesController } from '@/domain/Types'
import { Router, Response, Request } from 'express'
import { ApiMiddleware } from '@/middlewares'

export function routes(
  types: TypesController,
  users: UserController,
  login: LoginController,
): Router {

  const router = Router()

  router.get('/', (req: Request, res: Response) => {
    res.send('Servidor rodando, tudo ok')
  })

  router.get('/tipoModels', async (req: Request, res: Response) => {
    res.json(await types.list(res))
  })

  router.get('/users', ApiMiddleware, async (req: Request, res: Response) => {
    res.send(await users.list(res))
  })

  router.post('/login', async (req: Request, res: Response) => {
    return await login.login(req, res)
  })

  return router
}
