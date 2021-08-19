
exports.up = async function(db) {
  await db.schema.createTable("notes", (table) => {
    table.increments('id');
    table.string('content');
  });
};

exports.down = async function(db) {
  await db.schema.dropTableIfExists("notes");
};
