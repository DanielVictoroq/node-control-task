import { Router, Response, Request } from 'express'
import { ApiMiddleware } from '@/middlewares'
import { CreateDebtController, FetchDebtController, UpdateDebtController, DeleteDebtController } from '../controllers'

export function routesDebts(
  fetchController: FetchDebtController,
  createController: CreateDebtController,
  updateController: UpdateDebtController,
  deleteController: DeleteDebtController,
): Router {

  const router = Router()

  router.get('/', ApiMiddleware, async (req: Request, res: Response) => {
    return res.json(await fetchController.fetch(req))
  })

  router.post('/', ApiMiddleware, async (req: Request, res: Response) => {
    const { status, message, entity } = await createController.create(req)
    return res.status(status).json({ message, entity })
  })

  router.put('/:id', ApiMiddleware, async (req: Request, res: Response) => {
    const { status, message, entity } = await updateController.update(req)
    return res.status(status).json({ message, entity })
  })

  router.delete('/:id', ApiMiddleware, async (req: Request, res: Response) => {
    const { status, message, entity } = await deleteController.delete(req)
    return res.status(status).json({ message, entity })
  })

  return router
}
