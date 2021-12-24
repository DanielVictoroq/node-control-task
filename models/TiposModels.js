const database = require('../config/database') 
const conexao = database();

class TiposModels {

    retornarTipos (res) {
        conexao.query('SELECT * FROM controlBase.types_models', function(err, result){
            res.json(result);
        })
        return res;
    }
}
module.exports = new TiposModels