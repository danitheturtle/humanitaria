import express from 'express';
import cors from 'cors';
import process from 'process';
import { setupDB } from './config/databaseConnection';
import { updateSchema } from './graphql/schema';
import { api } from './index.js';
const { env } = process;

const app = express();
setupDB(v => console.log(v));

app.use(cors());

app.use(api);
app.get("/", (req, res) => {
  res.redirect("/graphql");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  process.stdout.write(`[api] http://localhost:${port}/`);
  //console.log({ env: env.APP_ENV, version: env.VERSION, db: env.PGDATABASE });
  updateSchema();
});