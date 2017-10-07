export default async (env) => {
  const { dao, Zatanna } = env
  const tasks = await dao.tasks.select({ user: Zatanna.id })
  tasks.forEach(({ id, title }) => {
    dao.tasks.update({ title: title.toLowerCase() }, { id })
  })
  dao.tasks.update({ status: 'finished' }, { title: 'do some magic' })

  await dao.execute()
  console.log('Zatanna tasks has been updated')
}
