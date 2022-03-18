import express from 'express'
import bodyParser from 'body-parser'
import { createConnection } from 'typeorm'
import { routes } from '../routes/rotas'
import { TypesController } from '@/domain/Types/controllers'
import { LoginController, UserController } from '@/domain/User/controllers'
import { createServer } from 'http'

const port = process.env.HTTP_PORT || 3000

export async function configRoutesFunction(
  types: TypesController,
  users: UserController,
  login: LoginController,
) {
  const app = express()

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.use('/', routes(
    types,
    users,
    login,
  ))

  const server = createServer(app)

  server.listen(3000, () => console.log(`Connected!! ${port}`))

  createConnection()
}