require('env');
import express from 'express';
import cors from 'cors';
import process from 'process';
import { updateSchema } from './graph/schema';
import { api } from './router';


const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(api);
app.get("/", (req, res) => {
  res.redirect("/graphql");
});

app.listen(port, () => {
  console.log(`[api] http://localhost:${port}/`);
  console.log({ env: process.env.APP_ENV, version: process.env.VERSION, db: process.env.PGDATABASE });
  updateSchema();
});