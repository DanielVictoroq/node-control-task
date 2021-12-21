const conexao = require('../config/database') 
const teste = conexao();

class TiposModels {
    
    retornarTipos () {
        teste.query('SELECT * FROM controlBase.types_models', function(err, result){
        	console.log(result)
        })
    }
}
module.exports = new TiposModels