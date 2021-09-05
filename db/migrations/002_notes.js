
exports.up = async function(db) {
  await db.schema.createTable("notes", (table) => {
    table.increments('id');
    table.specificType("uid", "user_id").notNullable();
    table.string('content');
    table.integer('likes').defaultTo(0);
  });
};

exports.down = async function(db) {
  await db.schema.dropTableIfExists("notes");
};
