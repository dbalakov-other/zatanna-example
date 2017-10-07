export default async (env) => {
  const { dao, Zatanna } = env
  const tasks = await dao.tasks.select({ user: Zatanna.id })

  console.log('Zatanna tasks:', tasks)
}
