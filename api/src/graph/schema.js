import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { printSchema } from 'graphql';
import fs from 'fs';
import path from 'path';
import { nodeField, nodesField } from './nodeDefinitions';
import * as mutations from '../mutations';
import * as queries from '../queries';
import * as subscriptions from '../subscriptions';

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    nodes: nodesField,
    ...queries
  })
});

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: mutations
});

const RootSubscriptionType = new GraphQLObjectType({
  name: 'Subscription',
  fields: subscriptions
})

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
  subscription: RootSubscriptionType
});

export const updateSchema = () => {
  fs.writeFile(path.resolve(__dirname, '..', '..','./schema.graphql'), printSchema(schema), function(err) {
    if (err) {
      return console.log(err);
    }
  });
};

export default schema;