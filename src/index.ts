import 'reflect-metadata'
import { configRoutesFunction } from './config/config'
import { UserRepository, UserController } from '@/domain/User'
import { TypesRepository, TypesController} from '@/domain/Types'
import { Types, Users } from './database/entity'

const typesRepo = new TypesRepository(Types)
const userRepo = new UserRepository(Users)

configRoutesFunction(new TypesController(typesRepo), new UserController(userRepo))
