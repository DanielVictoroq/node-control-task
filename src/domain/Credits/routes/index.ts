import { Router, Response, Request } from 'express'
import { ApiMiddleware } from '@/middlewares'
import { CreditsController } from '../controllers'

export function routesCredits(
  credits: CreditsController,
): Router {

  const router = Router()

  router.get('/', ApiMiddleware, async (req: Request, res: Response) => {
    res.send('credits')
  })
  return router
}
