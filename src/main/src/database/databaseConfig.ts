import { configPath, createConfig } from "../utils/createConfig"

interface Credentials {
  user: string,
  ip: string,
  database: string,
  password: string,
  port: number,
}

createConfig()
const config = require(configPath)

export const dbCredentials: Credentials = {
  user: config.database.user,
  ip: config.database.ip,
  database: config.database.database,
  password: config.database.password,
  port: config.database.port,
}
