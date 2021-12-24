const Tarefas = require('../models/Tarefas')

class TarefasController {
    lista(res) {
        return Tarefas.retornarTipos(res)
    }
}
module.exports = new TarefasController