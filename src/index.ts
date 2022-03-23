import 'reflect-metadata'
import { configRoutesFunction } from './config/config'
import { UserRepository, UserController, LoginController, LoginService, UserService } from '@/domain/User'
import { TypesRepository, TypesController } from '@/domain/Types'
import { Credits, Debts, Tasks, Types, Users } from './database/entity'
import { CreditsController, CreditsRepository } from './domain/Credits'
import { DebtsController, DebtsRepository } from './domain/Debts'
import { TaskRepository, TasksController, TaskService } from './domain/Tasks'
const userRepo = new UserRepository(Users)
const typesRepo = new TypesRepository(Types)
const creditsRepo = new CreditsRepository(Credits)
const debtsRepo = new DebtsRepository(Debts)
const tasksRepo = new TaskRepository(Tasks)
const loginService = new LoginService(userRepo)
const userService = new UserService(userRepo)
const tasksService = new TaskService(tasksRepo)
const typesController = new TypesController(typesRepo)
const userController = new UserController(userService)
const loginController = new LoginController(loginService)
const creditsController = new CreditsController()
const debtsController = new DebtsController()
const tasksController = new TasksController(tasksService)

configRoutesFunction(
  typesController,
  userController,
  loginController,
  creditsController,
  debtsController,
  tasksController,
)