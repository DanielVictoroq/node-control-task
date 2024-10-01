import 'reflect-metadata'
import { configRoutesFunction } from './config/config'
import { UserRepository, UserController, LoginController, LoginService, UserService } from '@/domain/User'
import { TypesRepository, TypesController } from '@/domain/Types'
import { CreditsController, CreditsRepository, CreditsService } from './domain/Credits'
import { CreateDebtService, FetchDebtController, CreateRepository, UpdateRepository, DeleteRepository, FetchDebtRepository, UpdateDebtService, FetchDebtService, UpdateDebtController, DeleteDebtController, CreateDebtController, DeleteDebtService } from './domain/Debts'
import { TaskRepository, TasksController, TaskService } from './domain/Tasks'
import { initDatabase } from './database'

(async () => {
  await Promise.all([
    initDatabase(),
  ])

  const userRepo = new UserRepository()
  const typesRepo = new TypesRepository()
  const creditsRepo = new CreditsRepository()
  const createDebtRepo = new CreateRepository()
  const updateDebtRepo = new UpdateRepository()
  const fetchDebtRepo = new FetchDebtRepository()
  const deleteDebtRepo = new DeleteRepository()

  const tasksRepo = new TaskRepository()
  const loginService = new LoginService(userRepo)
  const userService = new UserService(userRepo)
  const tasksService = new TaskService(tasksRepo)
  const creditsService = new CreditsService(creditsRepo)
  const typesController = new TypesController(typesRepo)
  const userController = new UserController(userService)
  const loginController = new LoginController(loginService)
  const creditsController = new CreditsController(creditsService)


  const createDebtService = new CreateDebtService(createDebtRepo)
  const updateDebtService = new UpdateDebtService(updateDebtRepo)
  const fetchDebtService = new FetchDebtService(fetchDebtRepo)
  const deleteDebtService = new DeleteDebtService(deleteDebtRepo)

  const createController = new CreateDebtController(createDebtService)
  const updateController = new UpdateDebtController(updateDebtService)
  const deleteController = new DeleteDebtController(deleteDebtService)
  const fetchController = new FetchDebtController(fetchDebtService)
  const tasksController = new TasksController(tasksService)

  configRoutesFunction(
    typesController,
    userController,
    loginController,
    creditsController,
    createController,
    fetchController,
    updateController,
    deleteController,
    tasksController,
  )
})()