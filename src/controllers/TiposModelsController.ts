import { User } from '../entity/User'
import {TiposModels} from '../models/TiposModels'

interface IDatabaseEntity {
    findOne(id: number): Promise<User>
}
export class TiposModelsController {

    private dbEntity: IDatabaseEntity

    constructor(dbEntity: IDatabaseEntity) {
      this.dbEntity = dbEntity
    }

    async lista(res?: unknown) {
        return await this.dbEntity.findOne(1);
    }

    async insereTipo(res: any, bodyReq: any) {
        return await this.dbEntity.findOne(1);
    }
}