import uuid from 'uuid'

export default async (env) => {
  const { dao } = env
  env.Batman = { id: uuid.v4(), name: 'Batman' }
  env.Zatanna = { id: uuid.v4(), name: 'Zatanna' }
  env.Linus = { id: uuid.v4(), name: 'Linus' }

  dao.users.insert(env.Batman)
  dao.users.insert(env.Zatanna)
  dao.users.insert(env.Linus)

  await dao.execute()
  console.log('Users have been inserted')
}
