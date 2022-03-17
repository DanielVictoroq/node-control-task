declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: 'development' | 'production'
      DB_HOST?: string
      DB_PORT?: `${number}`
      DB_USERNAME?: string
      DB_PASSWORD?: string
      DB_DATABASE?: string
      DB_SSH_HOST?: string
      DB_SSH_USER?: string
      DB_SSH_PASSWORD?: string
    }
  }
}

export { }