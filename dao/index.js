import path from 'path'

import Zatanna from 'zatanna'

class DAO extends Zatanna {
  constructor (config) {
    super(config, path.join(__dirname, 'models'))
  }
}

export default DAO
