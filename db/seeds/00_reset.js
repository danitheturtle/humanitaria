module.exports.seed = async (db) => {
  await db.table("users").delete();
  await db.table("notes").delete();
};
