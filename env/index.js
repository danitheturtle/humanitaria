const os = require("os");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const minimist = require("minimist");
const babel = require("@babel/core");

const args = minimist(process.argv.slice(2));
const envName = args.env || minimist(args._).env || "development";
const rootPath = path.resolve(__dirname, "..");
const resolve = (filename) => path.resolve(__dirname, filename);

/**
 * Loads environment variables from .env files.
 */
module.exports.loadEnv = function loadEnv(envName) {
  const env = [
    dotenv.config({ path: resolve(`.env`) }).parsed,
    dotenv.config({ path: resolve(`.env.${envName}`) }).parsed
  ].reduce((acc, parsed) => ({ ...acc, ...parsed }), {});

  // Resolve relative paths to absolute
  ["PGSSLCERT", "PGSSLKEY", "PGSSLROOTCERT"].forEach((key) => {
    if (env[key] && env[key].startsWith(".")) {
      env[key] = path.resolve(__dirname, env[key]);
    }
  });

  // Ensure that the SSL key file has correct permissions
  if (env.PGSSLKEY) {
    try {
      fs.chmodSync(env.PGSSLKEY, 0o600);
    } catch (err) {
      console.error(err);
    }
  }

  // Default application version
  if (!env.VERSION) {
    env.VERSION = os.userInfo().username;
  }

  Object.assign(process.env, env);
  return { ...env };
};

module.exports.loadEnv(envName)
