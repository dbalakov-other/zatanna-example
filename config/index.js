import defaultConfig from './default.json'

class Config {
  constructor () {
    Object.keys(VARIABLES).forEach((key) => { this[key] = process.env[VARIABLES[key]] || defaultConfig[key] })
  }
}

const VARIABLES = {
  db: 'EXAMPLE_DB'
}

export default Config
