import { Router, Request, Response } from 'express'
import { ApiMiddleware } from '@/middlewares'
import { TasksController, TaskCreateValidate, TaskUpdateValidate } from '@/domain/Tasks'

export function routesTasks(
  tasksController: TasksController,
): Router {

  const router = Router()

  router.get('/', ApiMiddleware, async (req: Request, res: Response) => {
    return res.json(await tasksController.fetch(req))
  })

  router.post('/', ApiMiddleware, TaskCreateValidate, async (req: Request, res: Response) => {
    const {status, message, task, tasks} = await tasksController.create(req)
    return res.status(status).json({message, task, tasks})
  })

  router.put('/:id', ApiMiddleware, TaskUpdateValidate, async (req: Request, res: Response) => {
    const {status, message, task, tasks} = await tasksController.update(req)
    return res.status(status).json({message, task, tasks})
  })

  return router
}
