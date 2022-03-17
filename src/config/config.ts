import express from 'express'
import bodyParser from 'body-parser'
import { createConnection } from 'typeorm'
import {routes} from '../routes/rotas'
import { TypesModelsController } from '@/controllers'

const port = process.env.HTTP_PORT || 3000

export async function configRoutesFunction(typesModels : TypesModelsController) {
  const app = express()

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.use('/', routes(typesModels))
  app.listen(3000, () => console.log(`Connected!! ${port}`))
  createConnection()
}