import { TiposModelsController } from '../controllers/TiposModelsController'
import { Router } from 'express';
const routes = Router();

routes.get('/', (req: any, res: any) => {res.send('Servidor rodando, tudo ok')});
routes.get('/tipoModels', (req: any, res: any) => { TiposModelsController.lista(res)});
routes.post('/tipoModels', (req: any, res: any) => { 
    TiposModelsController.insereTipo(res, req.body)
    res.send('OK')
});
export default routes