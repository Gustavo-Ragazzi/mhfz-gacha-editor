import { existsSync, writeFileSync } from "fs"
import { join } from "path"

const defaultConfig = {
  "database": {
    "user": "",
    "ip": "",
    "database": "",
    "password": "",
    "port": "5432"
  }
}

export const configPath = join(__filename, '../../../src', 'config', 'config.json')

export const createConfig = () => {
  if (!existsSync(configPath)) {
    writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2), 'utf-8')
  }
}
