require('env');
import fs from "fs";
import knex from "knex";
import config from "../../db/knexfile";

const dbRef = knex(config[process.env.APP_ENV]);
export default {
  dbRef,
  getNotes: async () => {
    const result = await dbRef
      .table("notes")
      .select('*');
    return result;
  },
  getNote: async (id) => { 
    const [result] = await dbRef
      .table("notes")
      .where("id", id)
    return result;
  },
  createNote: async (noteData) => {
    const [newNote] = await dbRef
      .table("notes")
      .insert(noteData)
      .returning(["id", ...Object.keys(noteData)]);
    return newNote
  },
  deleteNote: async (id) => {
    const [deletedNote] = await dbRef
      .table("notes")
      .where("id", id)
      .del(['id', 'content']);
    return deletedNote;
  },
  updateNote: async (noteData) => {
    const { id } = noteData;
    const [updatedNote] = await dbRef
      .table("notes")
      .where("id", id)
      .update(noteData)
      .returning(Object.keys(noteData));
    return updatedNote;
  }
}
