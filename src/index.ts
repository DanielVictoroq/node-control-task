import 'reflect-metadata'
import { configRoutesFunction } from './config/config'
import { UserRepository, UserController, LoginController, LoginService, UserService } from '@/domain/User'
import { TypesRepository, TypesController } from '@/domain/Types'
import { CreditsController, CreditsRepository, CreditsService } from './domain/Credits'
import { DebtsController, DebtsRepository, DebtsService } from './domain/Debts'
import { TaskRepository, TasksController, TaskService } from './domain/Tasks'
import { initDatabase } from './database'


// (async (): Promise<void> => {

initDatabase()

const userRepo = new UserRepository()
const typesRepo = new TypesRepository()
const creditsRepo = new CreditsRepository()
const debtsRepo = new DebtsRepository()
const tasksRepo = new TaskRepository()
const loginService = new LoginService(userRepo)
const userService = new UserService(userRepo)
const tasksService = new TaskService(tasksRepo)
const debtsService = new DebtsService(debtsRepo)
const creditsService = new CreditsService(creditsRepo)
const typesController = new TypesController(typesRepo)
const userController = new UserController(userService)
const loginController = new LoginController(loginService)
const creditsController = new CreditsController(creditsService)
const debtsController = new DebtsController(debtsService)
const tasksController = new TasksController(tasksService)

configRoutesFunction(
  typesController,
  userController,
  loginController,
  creditsController,
  debtsController,
  tasksController,
)

// })