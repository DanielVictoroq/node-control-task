const database = require('../config/database') 
import { ITiposModels } from '../interface/ITiposModels'; 

export class TiposModels implements ITiposModels{

    name: string;
    types_id: Number;
    created_at: Date;
    updated_at: Date;

    constructor(){
        this.name = ''
        this.types_id = 0
        this.created_at = new Date
        this.updated_at = new Date
    }

    public static get getName(){
        return this.name
    }
    
    public set setName(name: string){
        this.name = name
    }

    public get getTypeId(){
        return this.types_id
    }

    public set setTypeId(types_id: Number){
        this.types_id = types_id
    }

    public get getCreated_at(){
        return this.created_at
    }

    public set setCreated_at(created_at: Date){
        this.created_at = created_at
    }
    public get getUpdated_at(){
        return this.updated_at
    }

    public set setUpdated_at(updated_at: Date){
        this.updated_at = updated_at
    }

    static retornarTipos (res: any) {
        const sql = 'SELECT * FROM controlBase.types_models'
        return database.solicitacaoGET(sql, res)
    }

    static insereTipo (res: any, body: any) {
        

        const sql = "INSERT INTO controlBase.types_models (name, types_id, created_at, updated_at) VALUES ?)"

        return database.solicitacaoPOST(sql, res)
    }
}