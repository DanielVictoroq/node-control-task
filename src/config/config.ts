import express from 'express';
import bodyParser from 'body-parser';
import { createConnection } from 'typeorm'
import routes from '../routes/rotas'

const port = process.env.HTTP_PORT || 3000

export async function configRoutesFunction() {
  const app = express()

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.use('/', routes);
  app.listen(3000, () => console.log(`Connected!! ${port}`))
  createConnection()
}