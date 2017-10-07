module.exports = (value, params) => (
  `(SELECT "name" FROM "Users" WHERE "Tasks"."user" = "Users"."id") = $${params.push(value)}`
)