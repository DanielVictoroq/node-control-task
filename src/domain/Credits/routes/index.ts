import { Router, Response, Request } from 'express'
import { ApiMiddleware } from '@/middlewares'
import { CreditsController } from '../controllers'
import { CreditCreateValidate, CreditUpdateValidate } from '@/domain/Credits'

export function routesCredits(
  creditsController: CreditsController,
): Router {

  const router = Router()

  router.get('/', ApiMiddleware, async (req: Request, res: Response) => {
    res.send('credits')
  })

  router.post('/', ApiMiddleware, CreditCreateValidate, async (req: Request, res: Response) => {
    const { status, message, entity } = await creditsController.create(req)
    return res.status(status).json({ message, entity })
  })

  router.put('/:id', ApiMiddleware, CreditUpdateValidate, async (req: Request, res: Response) => {
    const { status, message, entity } = await creditsController.update(req)
    return res.status(status).json({ message, entity })
  })

  router.delete('/:id', ApiMiddleware, async (req: Request, res: Response) => {
    const { status, message, entity } = await creditsController.delete(req)
    return res.status(status).json({ message, entity })
  })
  return router
}
