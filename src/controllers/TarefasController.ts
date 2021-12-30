import {Tarefas} from '../models/Tarefas'

class TarefasController {
    lista(res: any) {
        return Tarefas.retornarTipos(res)
    }
}
export default new TarefasController