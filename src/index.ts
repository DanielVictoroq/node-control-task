import 'reflect-metadata'
import { configRoutesFunction } from './config/config'
import { TypesController, UserController } from './controllers'
import { TypesRepository, UserRepository } from './repository'
import { Types, Users } from './database/entity'

const typesRepo = new TypesRepository(Types)
const userRepo = new UserRepository(Users)

configRoutesFunction(new TypesController(typesRepo), new UserController(userRepo))
