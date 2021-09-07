import { GraphQLID, GraphQLInputObjectType } from 'graphql';
import { connectionArgs } from 'graphql-relay';
import { fromGlobalId } from '../graph/utils';
import { QueryNotesConnection, NoteType } from '../types';
import db from '../db';

export const notes = {
  type: QueryNotesConnection,
  args: connectionArgs,
  resolve: async (_, args) => {
    const cursorId = parseInt(args.after || args.before || "0");
    const dirComparator = args.after ? '>' : '<';
    const dbResult = await db.getNotesConnection(cursorId, dirComparator, args.first || args.last);
    return {
      pageInfo: {
        hasNextPage: dbResult.hasNextPage,
        hasPreviousPage: dbResult.hasPreviousPage,
        startCursor: String(dbResult.startCursor),
        endCursor: String(dbResult.endCursor)
      },
      edges: dbResult.data.map(n => ({
        cursor: String(n.id),
        node: n
      }))
    };
  }
}

export const note = {
  type: NoteType,
  args: {
    input: {
      type: new GraphQLInputObjectType({
        name: 'noteInput',
        fields: {
          id: { type: GraphQLID }
        }
      })
    }
  },
  resolve: async (_, args) => {
    const id = fromGlobalId(args.id);
    return await db.getNote(id);
  }
}
