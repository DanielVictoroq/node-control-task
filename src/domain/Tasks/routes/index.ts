import { Router, Request, Response } from 'express'
import { ApiMiddleware } from '@/middlewares'
import { TasksController } from '@/domain/Tasks'

export function routesTasks(
  tasks: TasksController,
): Router {

  const router = Router()

  router.get('/', ApiMiddleware, async (req: Request, res: Response) => {
    return res.json(await tasks.fetch(req))
  })

  return router
}
