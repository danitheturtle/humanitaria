module.exports.up = async (db) => {
  // PostgreSQL extensions
  await db.raw(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
  await db.raw(`CREATE EXTENSION IF NOT EXISTS "hstore"`);
  await db.raw(`CREATE EXTENSION IF NOT EXISTS "citext"`);

  // Custom data types (username, email, etc.)
  await db.raw(`CREATE DOMAIN username AS citext CHECK (VALUE ~ '^[0-9a-zA-Z._]{2,48}$')`);
  await db.raw(`CREATE DOMAIN email AS citext CHECK (VALUE ~ '^([^\\s@]+@([^\\s@.,]+\\.)+[^\\s@.,]{2,})*$')`);

  // Custom UID types for better user experience (unlocks having short URLs etc.)
  await db.raw(`CREATE DOMAIN user_id AS TEXT CHECK(VALUE ~ '^[0-9a-z]{9}$')`);

  await db.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.specificType("uid", "user_id").notNullable().unique();
    table.specificType("username", "username").notNullable().unique();
    table.specificType("email", "email").index();
    table.boolean("email_verified").notNullable().defaultTo(false);
    table.string("password", 60); // 60-character bcrypt hash string
    table.string("picture", 250);
    table.string("name", 100);
    table.string("legal_name", 100);
    table.string("timezone", 50);
    table.string("locale", 10);
    table.boolean("admin").notNullable().defaultTo(false);
    table.timestamps(false, true);
    table.timestamp("last_login");
  });
};

module.exports.down = async (db) => {
  await db.schema.dropTableIfExists("users");
  await db.raw("DROP DOMAIN IF EXISTS user_id");
};

module.exports.configuration = { transaction: true };
