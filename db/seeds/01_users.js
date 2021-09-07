const fs = require("fs");
const bcrypt = require("bcrypt");
const nanoid = require("nanoid");
const prettier = require("prettier");
const { name, date, image, internet, random } = require("faker");

// Short ID generator
// https://zelark.github.io/nano-id-cc/
const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
const newUserId = nanoid.customAlphabet(alphabet, 9);

const jsonFile = `${__filename.substring(0, __filename.lastIndexOf("."))}.json`;

function stringify(obj) {
  return prettier.format(JSON.stringify(obj), { parser: "json" });
} 

/**
 * Seeds the database with test / reference user accounts
 */
module.exports.seed = async (db) => {
  let users = fs.existsSync(jsonFile) ? require(jsonFile) : null;
  if (!users) {
    console.log("Generating users.json...");
    const usernames = new Set();
    const emails = new Set();
    
    users = await Promise.all(Array.from({ length: 200 }).map(async () => {
      const uid = newUserId();
      const gender = name.gender();
      const firstName = name.firstName(gender);
      const lastName = name.lastName(gender);
      let username = internet.userName(firstName, lastName);
      let email = internet.email(firstName, lastName).toLowerCase();
      const password = await new Promise((res, rej) => {
        bcrypt.hash("password", 10, (err, hash) => {
          if (err) rej(err);
          res(hash);
        });
      });
      const createdAt = date.recent(365);

      // Ensures that the username is unique
      while (usernames.has(username)) {
        username = `${internet.userName(firstName, lastName)}${random.number(421)}`;
      }
      // Ensures that the email is unique
      while (emails.has(email)) {
        email = `${internet.email(firstName, lastName + random.number(421)).toLowerCase()}`
      }

      usernames.add(username);

      return {
        uid,
        username,
        email,
        password,
        email_verified: true,
        name: `${firstName} ${lastName}`,
        legal_name: `${firstName} ${lastName}`,
        picture: image.avatar(),
        timezone: "UTC-5 / EST", //Todo: make enum
        locale: "en-us",
        last_login: Math.random() > 0.5 ? date.between(createdAt, new Date()) : null,
      };
    }));

    fs.writeFileSync(jsonFile, stringify(users), "utf8");
  }

  await db.table("users").insert(users);
};
