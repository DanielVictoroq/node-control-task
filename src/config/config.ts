import express from 'express'
import bodyParser from 'body-parser'
import { createConnection } from 'typeorm'
import { LoginController, UserController, routesUsers } from '@/domain/User'
import { CreditsController, routesCredits } from '@/domain/Credits'
import { DebtsController, routesDebts } from '@/domain/Debts'
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
  debts: DebtsController,
  tasks: TasksController,
) {
  const app = express()

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  //use Rotas
  app.use('/', routesAll(login))
  app.use('/usuarios', routesUsers(users))
  app.use('/creditos', routesCredits(credits))
  app.use('/debitos', routesDebts(debts))
  app.use('/tipos', routesTypes(types))
  app.use('/tarefas', routesTasks(tasks))

  const server = createServer(app)
  server.listen(3000, () => console.log(`Connected!! ${port}`))

  createConnection()
}