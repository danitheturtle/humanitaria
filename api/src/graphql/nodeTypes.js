import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export const noteType = new GraphQLObjectType({
  name: 'Note',
  fields: {
    _id: { type: GraphQLID },
    content: { type: GraphQLString }
  }
});
