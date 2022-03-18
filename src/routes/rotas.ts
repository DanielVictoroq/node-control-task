import { UserController } from '@/domain/User'
import { TypesController} from '@/domain/Types'
import { Router, Response, Request } from 'express'

export function routes(types: TypesController, users : UserController): Router {

  const router = Router()

  router.get('/', (req: Request, res: Response) => {
    res.send('Servidor rodando, tudo ok')
  })

  router.get('/tipoModels', async (req: Request, res: Response) => {
    res.json(await types.list(res))
  })

  router.get('/users', async (req: Request, res: Response) => {
    res.send(await users.list(res))
  })
  return router
}
