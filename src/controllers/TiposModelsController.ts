import {TiposModels} from '../models/TiposModels'

export class TiposModelsController {
    static lista(res: any) {
        TiposModels.retornarTipos(res)
    }

    static insereTipo(res: any, bodyReq: any) {
        
        // TiposModels.insereTipo(res, bodyReq)
    }
}
export default new TiposModelsController