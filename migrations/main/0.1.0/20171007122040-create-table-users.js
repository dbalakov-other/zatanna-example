exports.up = async db => {
  await db.query(SQL_UP)
}

exports.down = async db => {
  await db.query('DROP TABLE "Users"')
}

const SQL_UP = `
CREATE TABLE "Users" (
  "id"   UUID    PRIMARY KEY,
  "name" VARCHAR NOT NULL
);`
