import { DataSource } from 'typeorm'
import type { LoggerOptions } from 'typeorm'
import { AuxTypes, Credits, DebtMapper, Schedule, Tasks, Types, Users } from './entity'

export const defaultDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_DATABASE || 'baseControl',
  // ssl: process.env.DB_SSL || { rejectUnauthorized: false },
  charset: 'utf8mb4_general_ci',
  timezone: process.env.DB_TIMEZONE || 'America/Fortaleza',
  synchronize: false,
  logging: ['query', 'warn', 'error', 'migration'].slice(process.env.NODE_ENV == 'production' ? 1 : 0) as LoggerOptions,
  maxQueryExecutionTime: 1000,
  entities: [
    Users,
    Credits,
    DebtMapper,
    Schedule,
    Tasks,
    AuxTypes,
    Types,
  ],
  migrations: [__dirname + '/migration/*.{js,ts}'],
  subscribers: [],
})

/** Inicia as conexões com banco de dados. */
export async function initDatabase(): Promise<void> {
  // Caso existam mais de uma conexão, usar Promise.all
  await defaultDataSource.initialize()
}

/** Finaliza as conexões com banco de dados */
export async function finishDatabase(): Promise<void> {
  // Caso existam mais de uma conexão, usar Promise.all
  await defaultDataSource.destroy()
}
