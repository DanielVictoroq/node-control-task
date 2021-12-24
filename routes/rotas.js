const TiposModelsController = require('../controllers/TiposModelsController')
const TarefasController = require('../controllers/TarefasController')
// const TiposModels = require('../models/TiposModels')
module.exports = app => { 
    app.get('/', (req, res) => res.send('Servidor rodando, tudo ok'))
    app.get('/tipoModels', (req, res) => {
        TiposModelsController.lista(res)
    })
    app.get('/tarefas', (req, res) => {
        TarefasController.lista(res)
    })
}