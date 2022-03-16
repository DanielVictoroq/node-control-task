// const database = require('../config/database')
import { ITarefas } from '../interface/ITarefas'; 

export class Tarefas implements ITarefas {
    title: string;
    description: string;
    dt_task: Date;
    type_task_id: number;
    debt_id: number;
    credt_id: number;
    user_id: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;

    constructor() {
        this.title = ''
        this.description = ''
        this.dt_task = new Date
        this.type_task_id = 0
        this.debt_id = 0
        this.credt_id = 0
        this.user_id = 0
        this.created_at = new Date
        this.updated_at = new Date
        this.deleted_at = new Date
    }

    static retornarTipos (res: any): any {
        // const conexao = database.connectDB();
        // conexao.query('SELECT * FROM controlBase.types_models', function(err: any, rows: any) {
        //     if(err) { return res.json(err) }
        //     else { return res.json(rows) }
        // })
    }
}