const config = require('./config/config')
const data = require('./config/database')
const TiposModels = require('./persistencia/TiposModels')

const app = config()
const teste = data();

teste.connect((error) => {
  	if (error) {
    	reject(error);
  	}
	console.log(TiposModels.retornarTipos())
});

app.listen(3000, () => console.log('Servidor OK!!'))