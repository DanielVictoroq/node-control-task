import 'reflect-metadata'
import { configRoutesFunction } from './config/config'
import { TypesModelsController } from './controllers'
import { TypesModelsRepository } from './repository'
import { User } from './database/entity'

const typesRepository = new TypesModelsRepository(User)

configRoutesFunction(new TypesModelsController(typesRepository))
