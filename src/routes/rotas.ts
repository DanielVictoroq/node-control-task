import { TiposModelsController } from '../controllers/TiposModelsController'
import { Router } from 'express';
import { User } from '../entity/User';

const routes = Router();

routes.get('/', (req: any, res: any) => { res.send('Servidor rodando, tudo ok') });
routes.get('/tipoModels', async (req: any, res: any) => {
  const typeModels = new TiposModelsController(User).lista(res)
  res.json(await typeModels)
});
routes.post('/tipoModels', (req: any, res: any) => {
  res.send('OK')
});

export default routes