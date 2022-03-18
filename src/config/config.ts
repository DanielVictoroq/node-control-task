/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express'
import bodyParser from 'body-parser'
import { createConnection } from 'typeorm'
import { routes } from '../routes/rotas'
import { TypesController } from '@/domain/Types/controllers'
import { UserController } from '@/domain/User/controllers'

import {Jwt} from 'jsonwebtoken'

const port = process.env.HTTP_PORT || 3000

export async function configRoutesFunction(types: TypesController, users: UserController) {
  const app = express()

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.use('/', routes(
    types,
    users,
  ))

  app.listen(3000, () => console.log(`Connected!! ${port}`))
  createConnection()
}