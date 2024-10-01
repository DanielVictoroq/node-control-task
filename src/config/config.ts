import express from 'express'
import bodyParser from 'body-parser'
import { LoginController, UserController, routesUsers } from '@/domain/User'
import { CreditsController, routesCredits } from '@/domain/Credits'
import { CreateDebtController, DeleteDebtController, FetchDebtController, routesDebts, UpdateDebtController } from '@/domain/Debts'
import { routesTypes, TypesController } from '@/domain/Types'
import { routesTasks, TasksController } from '@/domain/Tasks'
import { routesAll } from './routes'
import { createServer } from 'http'

const port = process.env.HTTP_PORT || 3000

export async function configRoutesFunction(
  types: TypesController,
  users: UserController,
  login: LoginController,
  credits: CreditsController,
  createDebts: CreateDebtController,
  fetchDebts: FetchDebtController,
  updateDebts: UpdateDebtController,
  deleteDebts: DeleteDebtController,
  tasks: TasksController,
) {
  const app = express()

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  //use Rotas
  app.use('/', routesAll(login))
  app.use('/usuarios', routesUsers(users))
  app.use('/creditos', routesCredits(credits))
  app.use('/debitos', routesDebts(
    fetchDebts,
    createDebts,
    updateDebts,
    deleteDebts,
  ))
  app.use('/tipos', routesTypes(types))
  app.use('/tarefas', routesTasks(tasks))

  const server = createServer(app)
  server.listen(3000, () => console.log(`Connected!! ${port}`))

}