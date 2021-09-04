require('env');
import express from 'express';
import cors from 'cors';
import process from 'process';
import { updateSchema } from './graph/schema';
import { api } from './router';
import { configureSubscriptions } from './graph/configureSubscriptions';

const port = process.env.SERVER_PORT || 4000;
const app = express();

app.use(cors());
app.use(api);
app.get("/", (req, res) => {
  res.redirect("/graphql");
});

const server = app.listen(port, () => {
  configureSubscriptions(server);
  console.log(`[api] ${process.env.SERVER_ORIGIN}:${port}/`);
  console.log({ env: process.env.APP_ENV, version: process.env.VERSION, db: process.env.PGDATABASE });
  updateSchema();
});