require('env');
import knex from "knex";
import config from "../../../db/knexfile";
import { notesApi } from './notes';
import { usersApi } from './users';
import { lookupLocation, searchLocation } from './locationDB';

const dbRef = knex(config[process.env.APP_ENV]);
export default {
  dbRef,
  lookupLocation,
  searchLocation,
  ...notesApi(dbRef),
  ...usersApi(dbRef)
}
