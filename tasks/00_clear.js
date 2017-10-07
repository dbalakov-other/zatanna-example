export default async ({ dao }) => {
  dao.tasks.delete()
  dao.users.delete()

  await dao.execute(true)
  console.log('The database has been cleared')
}