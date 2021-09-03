import { GraphQLObjectType, GraphQLBoolean, GraphQLString, GraphQLID } from 'graphql';
import { globalIdField, connectionDefinitions } from "graphql-relay";
import { nodeInterface } from '../graph/nodeDefinitions';
import { UserType } from '../types';
import db from '../db';

export const NoteType = new GraphQLObjectType({
  name: 'Note',
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField('Note'),
    content: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: (source) => db.getUser({ uid: source.uid })
    }
  })
});

export const {
  connectionType: QueryNotesConnection,
  edgeType: QueryNotesEdge
} = connectionDefinitions({ name: 'Note', nodeType: NoteType });
