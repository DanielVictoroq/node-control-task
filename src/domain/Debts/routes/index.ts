import { Router, Response, Request } from 'express'
import { ApiMiddleware } from '@/middlewares'
import { DebtsController } from '../controllers'

export function routesDebts(
  debts: DebtsController,
): Router {

  const router = Router()

  router.get('/', ApiMiddleware, async (req: Request, res: Response) => {
    res.send('PDebts')
  })

  return router
}
