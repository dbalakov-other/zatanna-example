import uuid from 'uuid'

export default async (env) => {
  const { dao, Batman, Zatanna } = env
  dao.tasks.insertAll([
    { id: uuid.v4(), user: Batman.id, title: 'Find Robin', status: 'started', order: 0 },
    { id: uuid.v4(), user: Batman.id, title: 'Kick ass Joker', status: 'started', order: 1 }
  ])
  dao.tasks.insertAll([
    { id: uuid.v4(), user: Zatanna.id, title: 'Learn about mysql', status: 'started', order: 0 },
    { id: uuid.v4(), user: Zatanna.id, title: 'Do some magic', status: 'started', order: 1 }
  ])

  await dao.execute()
  console.log('Tasks have been inserted')
}
