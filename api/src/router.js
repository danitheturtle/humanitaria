import { Router } from "express";
import { graphqlHTTP } from "express-graphql";
import { formatError } from "graphql";
import { express as voyager } from "graphql-voyager/middleware";
import { Context } from "./context";
import schema from "./graph/schema";
import { pubsub } from './graph/configureSubscriptions';
import session from "./session";

export const api = Router();

api.use(session);

// Generates interactive UML diagram for the API schema
// https://github.com/APIs-guru/graphql-voyager
if (process.env.APP_ENV !== "production") {
  api.use("/graphql/model", voyager({ endpointUrl: "/graphql" }));
}

api.use(
  "/graphql",
  graphqlHTTP((req) => ({
    schema,
    context: new Context(req, pubsub),
    graphiql: process.env.APP_ENV !== "production",
    pretty: process.APP_ENV !== "production",
    customFormatErrorFn: (err) => {
      console.error(err?.originalError || err);
      return formatError(err);
    },
  })),
);
