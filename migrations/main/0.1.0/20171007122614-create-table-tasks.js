exports.up = async db => {
  await db.query(SQL_UP)
}

exports.down = async db => {
  await db.query('DROP TABLE "Tasks"')
}

const SQL_UP = `
CREATE TABLE "Tasks" (
  "id"     UUID    PRIMARY KEY,
  "user"   UUID    REFERENCES "Users" ("id"),
  "title"  VARCHAR NOT NULL,
  "status" VARCHAR NOT NULL,
  "order"  INTEGER NOT NULL
);
CREATE INDEX "Tasks_status_idx" ON "Tasks" ("status");
CREATE INDEX "Tasks_order_idx" ON "Tasks" ("order");`
