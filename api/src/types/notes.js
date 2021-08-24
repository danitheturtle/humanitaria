import { GraphQLObjectType, GraphQLBoolean, GraphQLString, GraphQLID } from 'graphql';
import { globalIdField, connectionDefinitions } from "graphql-relay";
import { nodeInterface } from '../graph/nodeDefinitions';
// import db from '../db';

export const NoteType = new GraphQLObjectType({
  name: 'Note',
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField('Note'),
    content: { type: GraphQLString },
    // user: {
    //   type: UserType,
    //   resolve: (source) => db.getUser(source.userId)
    // }
  })
});

export const {
  connectionType: NoteConnection,
  edgeType: NoteEdge
} = connectionDefinitions({ name: 'Note', nodeType: NoteType });