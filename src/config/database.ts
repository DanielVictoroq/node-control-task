const mysql = require('mysql2')

class Conexao {
    conexao: any
    constructor (){
        this.conexao = this.connectDB();
    }

    connectDB (){
        const dbServer = {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        }
        return mysql.createConnection(dbServer);
    }

    solicitacaoGET(sql: any, res: any) {
        this.conexao.query(sql, function(err: any, result: any){
            res.json(result);
        })
    }

    solicitacaoPOST(sql: any, res: any) {
        this.conexao.query(sql, function(err: any, result: any){
            res.json(result);
        })
    }
}

module.exports = new Conexao