import ZatannaDAO from 'zatanna'

export default async (env) => {
  const { dao, Zatanna } = env
  const tasks = await dao.tasks.select(
    { userName: Zatanna.name },
    { 
      fields: [
        'title',
        new ZatannaDAO.Field.Link('SELECT * FROM "Users" WHERE "Users"."id" = "Tasks"."user"', 'user')
      ] 
    }
  )
  
  console.log('Zatanna tasks', tasks)
}
