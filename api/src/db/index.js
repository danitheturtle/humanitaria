require('env');
import knex from "knex";
import config from "../../../db/knexfile";
import { notesApi } from './notes';
import { usersApi } from './users';
import * as locationsApi from './locations';

const dbRef = knex(config[process.env.APP_ENV]);
export default {
  dbRef,
  ...locationsApi,
  ...notesApi(dbRef),
  ...usersApi(dbRef)
}
