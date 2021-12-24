const TiposModels = require('../models/TiposModels')

class TiposModelsController {
    lista(res) {
        res.json(TiposModels.retornarTipos(res))
    }
}
module.exports = new TiposModelsController