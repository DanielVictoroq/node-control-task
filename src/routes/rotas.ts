import { TypesModelsController } from '@/controllers'
import { Router } from 'express'

export function routes(typeModels: TypesModelsController): Router {

  const router = Router()

  router.get('/', (req: any, res: any) => { res.send('Servidor rodando, tudo ok') })

  router.get('/tipoModels', async (req: any, res: any) => {
    res.json(await typeModels.list(res))
  })

  router.post('/tipoModels', (req: any, res: any) => {
    res.send('OK')
  })
  return router
}
