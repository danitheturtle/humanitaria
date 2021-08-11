import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { setupDB } from './config/databaseConnection';
import schema from './graphql/schema';
import printSchemaFromBuild from './config/printSchemaFromBuild';

const app = express();
setupDB(v => console.log(v));

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true
  })
);

printSchemaFromBuild(schema);

app.listen(4000, () => console.log('SERVER OK'));