const fs = require("fs");
const path = require("path");
const prettier = require("prettier");
const { datatype, random } = require("faker");

const jsonFile = `${__filename.substring(0, __filename.lastIndexOf("."))}.json`;

function stringify(obj) {
  return prettier.format(JSON.stringify(obj), { parser: "json" });
} 

/**
 * Seeds the database with test / reference user accounts
 */
module.exports.seed = async (db) => {
  let notes = fs.existsSync(jsonFile) ? require(jsonFile) : null;
  let users;
  //wait till users are ready. Non-sync because of password gen
  while (!users?.[0]?.uid) {
    users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '01_users.json')));
    
  }
  
  if (!notes) {
    console.log("Generating notes.json...");
    notes = Array.from({ length: 100 }).map(() => {
      const content = random.words(20);
      const userIndex = datatype.number(users.length);
      return {
        uid: users[userIndex].uid,
        likes: datatype.number(20),
        content
      };
    });

    fs.writeFileSync(jsonFile, stringify(notes), "utf8");
  }

  await db.table("notes").insert(notes);
};
