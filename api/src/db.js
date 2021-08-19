import fs from "fs";
import knex from "knex";
import config from "../../../knexfile";

const dbRef = knex(config[process.env.APP_ENV]);
export default {
  dbRef,
  getNote: async (id) => { 
    const result = await dbRef
      .table("notes")
      .where("id", id)
      .select('*');
    return result;
  },
  createNote: async (noteData) => {
    const newNote = await dbRef
      .table("notes")
      .insert(noteData)
      .returning(Object.keys(noteData));
    return newNote
  }
}
