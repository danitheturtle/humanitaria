require('env');
import fs from "fs";
import knex from "knex";
import config from "../../../db/knexfile";
import { notesApi } from './notes';
import { usersApi } from './users';


const dbRef = knex(config[process.env.APP_ENV]);
export default {
  dbRef,
  ...notesApi(dbRef),
  ...usersApi(dbRef),
}
