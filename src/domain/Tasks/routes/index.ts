import { Router, Response, Request } from 'express'
import { ApiMiddleware } from '@/middlewares'
import { TasksController } from '../controllers'

export function routesTasks(
  tasks: TasksController,
): Router {

  const router = Router()

  router.get('/', ApiMiddleware, async (req: Request, res: Response) => {
    res.send('Tasks')
  })

  return router
}
