export default {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_DATABASE || 'baseControl',
  charset: 'utf8mb4',
  entities: ['src/database/entity/**/*.ts'],
  migrationsTableName: 'migrations',
  migrations: ['src/database/migration/*.ts'],
  cli: {
    'migrationsDir': 'src/database/migration',
  },
}