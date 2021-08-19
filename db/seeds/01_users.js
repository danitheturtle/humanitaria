const fs = require("fs");
const nanoid = require("nanoid");
const prettier = require("prettier");
const { name, date, image, internet, random } = require("faker");

// Short ID generator
// https://zelark.github.io/nano-id-cc/
const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
const newUserId = nanoid.customAlphabet(alphabet, 6);

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

    users = Array.from({ length: 200 }).map(() => {
      const id = newUserId();
      const gender = name.gender();
      const firstName = name.firstName(gender);
      const lastName = name.lastName(gender);
      let username = internet.userName(firstName, lastName);
      const createdAt = date.recent(365);

      // Ensures that the username is unique
      while (usernames.has(username)) {
        username = `${internet.userName(firstName, lastName)}${random.number(421)}`;
      }

      usernames.add(username);

      return {
        id,
        username,
        email: internet.email(firstName, lastName).toLowerCase(),
        name: firstName,
        legal_name: firstName,
        last_name: lastName,
        picture: image.avatar(),
        created_at: createdAt,
        updated_at: createdAt,
        last_login:
          Math.random() > 0.5 ? date.between(createdAt, new Date()) : null,
      };
    });

    fs.writeFileSync(jsonFile, stringify(users), "utf8");
  }

  await db.table("user").insert(users);
};
