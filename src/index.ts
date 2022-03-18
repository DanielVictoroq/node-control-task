import 'reflect-metadata'
import { configRoutesFunction } from './config/config'
import { UserRepository, UserController, LoginController, LoginService } from '@/domain/User'
import { TypesRepository, TypesController } from '@/domain/Types'
import { Types, Users } from './database/entity'

const typesRepo = new TypesRepository(Types)
const userRepo = new UserRepository(Users)
const loginService = new LoginService(userRepo)
const typesController = new TypesController(typesRepo)
const userController = new UserController(userRepo)
const loginController = new LoginController(loginService)

configRoutesFunction(
  typesController,
  userController,
  loginController,
)
