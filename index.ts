import config from './config/config';
import routes from './routes/rotas';

const app = config()
app.use('/', routes);
app.listen(3000, () => console.log('Servidor OK!!'))