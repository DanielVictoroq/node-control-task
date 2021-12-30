import config from './src/config/config';
import routes from './src/routes/rotas';

const app = config()
app.use('/', routes);
app.listen(3000, () => console.log('Servidor OK!!'))