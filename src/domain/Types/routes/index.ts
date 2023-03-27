import { Router, Response, Request } from 'express'
import { ApiMiddleware } from '@/middlewares'
import { TypesController } from '..'

export function routesTypes(
  types: TypesController,
): Router {

  const router = Router()

  router.get('/tipos', ApiMiddleware, async (req: Request, res: Response) => {
    res.send(await types.list(res))
  })

  return router
}
