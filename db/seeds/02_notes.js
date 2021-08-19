const fs = require("fs");
const prettier = require("prettier");
const { name, date, image, datatype, random } = require("faker");

const jsonFile = `${__filename.substring(0, __filename.lastIndexOf("."))}.json`;

function stringify(obj) {
  return prettier.format(JSON.stringify(obj), { parser: "json" });
} 

/**
 * Seeds the database with test / reference user accounts
 */
module.exports.seed = async (db) => {
  let notes = fs.existsSync(jsonFile) ? require(jsonFile) : null;
 
  if (!notes) {
    console.log("Generating notes.json...");

    notes = Array.from({ length: 100 }).map(() => {
      const id = datatype.uuid();
      const content = random.words(20);

      return {
        id,
        content
      };
    });

    fs.writeFileSync(jsonFile, stringify(notes), "utf8");
  }

  await db.table("notes").insert(notes);
};
