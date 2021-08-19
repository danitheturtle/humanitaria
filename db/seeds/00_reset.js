module.exports.seed = async (db) => {
  await db.table("user").delete();
  await db.table("notes").delete();
};
