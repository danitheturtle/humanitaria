require("env");
const knex = require("knex");
const spawn = require("cross-spawn");
const minimist = require("minimist");
const config = require("../knexfile");

// Parse the command line arguments
const args = minimist(process.argv.slice(2), {
  boolean: ["seed"],
  default: { env: "dev", seed: false },
});

let db;
const schema = "public";
const dbRole = process.env.PGUSER;

async function reset() {
  // Ensure that the database exists
  try {
    const database = "template1";
    db = knex({ ...config[process.env.APP_ENV], connection: { ...config[process.env.APP_ENV].connection, database } });
    await db.raw(`CREATE DATABASE ?? WITH OWNER ??`, [
      process.env.PGDATABASE,
      process.env.PGUSER,
    ]);
  } catch (err) {
    if (err.code !== "42P04") throw err;
  } finally {
    await db.destroy();
  }

  // Drop and re-create the database schema
  db = knex(config[process.env.APP_ENV]);
  await db.raw(`DROP SCHEMA IF EXISTS ?? CASCADE`, [schema]);
  await db.raw(`CREATE SCHEMA ?? AUTHORIZATION ??`, [schema, dbRole]);
  await db.raw(`GRANT ALL ON SCHEMA public TO ??`, [dbRole]);

  let p;
  const opts = { stdio: "inherit" };
  const envArg = `--env=${args.env}`;

  // Migrate database to the latest version
  p = spawn.sync("yarn", ["knex", "migrate:latest", envArg], opts);
  if (p.status !== 0) throw new Error();

  // Restore data from a backup file
  // if (args.from) {
  //   const fromArg = args.from ? `--from=${args.from}` : undefined;
  //   p = spawn.sync("yarn", ["run", "restore", envArg, fromArg], opts);
  //   if (p.status !== 0) throw new Error();
  // }

  // Seed database with sample/reference data
  if (args.seed) {
    p = spawn.sync("yarn", ["knex", "seed:run", envArg], opts);
    if (p.status !== 0) throw new Error();
  }
}

reset()
  .finally(() => db && db.destroy())
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
