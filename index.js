import Config from './config'
import DAO from './dao'
import wait from './wait'

import _00_clear from './tasks/00_clear'
import _01_createUsers from './tasks/01_create-users'
import _02_createTasks from './tasks/02_create-tasks'
import _03_get_tasks from './tasks/03_get-tasks'
import _04_update from './tasks/04_update'
import _05_get_tasks from './tasks/05_get-tasks'

const config = new Config()

const env = {
  dao: new DAO(config.db)
}

const TASKS = [
  _00_clear,
  _01_createUsers,
  _02_createTasks,
  _03_get_tasks,
  _04_update,
  _05_get_tasks
]

const step = async (index = 0) => {
  const task = TASKS[index]
  if (task == null) { return }

  await task(env)
  await wait()
  return step(index + 1)
}

step()