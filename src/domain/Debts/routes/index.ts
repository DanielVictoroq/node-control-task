import { Router, Response, Request } from 'express'
import { ApiMiddleware } from '@/middlewares'
import { DebtsController } from '../controllers'
import { DebtsCreateValidate } from '../validation/DebtCreateValidate'
import { DebtsUpdateValidate } from '../validation/DebtUpdateValidate'

export function routesDebts(
  debtsController: DebtsController,
): Router {

  const router = Router()

  router.get('/', ApiMiddleware, async (req: Request, res: Response) => {
    return res.json(await debtsController.fetch(req))
  })

  router.post('/', ApiMiddleware, DebtsCreateValidate, async (req: Request, res: Response) => {
    const { status, message, entity } = await debtsController.create(req)
    return res.status(status).json({ message, entity })
  })

  router.put('/:id', ApiMiddleware, DebtsUpdateValidate, async (req: Request, res: Response) => {
    const { status, message, entity } = await debtsController.update(req)
    return res.status(status).json({ message, entity })
  })

  router.delete('/:id', ApiMiddleware, async (req: Request, res: Response) => {
    const { status, message, entity } = await debtsController.delete(req)
    return res.status(status).json({ message, entity })
  })

  return router
}
