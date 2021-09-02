import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from 'graphql';

export const ErrorType = new GraphQLObjectType({
  name: 'Error',
  fields: () => ({
    code: { type: GraphQLInt },
    message: { type: GraphQLString },
    forInputWithId: { type: GraphQLString }
  })
});

export const ErrorListType = new GraphQLObjectType({
  name: 'ErrorList',
  fields: () => ({
    errors: new GraphQLList(ErrorType)
  })
})