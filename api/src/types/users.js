import { GraphQLObjectType, GraphQLBoolean, GraphQLID, GraphQLString, GraphQLNonNull } from 'graphql';
import { globalIdField, connectionArgs, connectionDefinitions } from "graphql-relay";
import { nodeInterface } from '../graph/nodeDefinitions';
import { NoteType } from '../types';
import db from '../db';

export const UserType = new GraphQLObjectType({
  name: 'User',
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField('User'),
    uid: { type: new GraphQLNonNull(GraphQLID) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (source, _, ctx) => {
        ctx.ensureAuthorized(ctxUser => ctxUser.uid === source.uid);
        return source.password;
      }
    },
    email: { type: GraphQLString },
    picture: { type: GraphQLString },
    name: { type: GraphQLString },
    legal_name: { type: GraphQLString },
    timezone: { type: GraphQLString },
    locale: { type: GraphQLString },
    last_login: { type: GraphQLString },
    email_verified: { type: GraphQLBoolean },
    admin: { type: GraphQLBoolean },
    notes: {
      type: UserNotesConnection,
      args: connectionArgs,
      resolve: async (source, args) => {
        const userConnectionFilter = queries => (
          queries.map(query => query.where('uid', source.uid))
        );
        const cursorId = parseInt(args.after || args.before || "0");
        const dirComparator = args.after ? '>' : '<';
        const dbResult = await db.getNotesConnection(cursorId, dirComparator, args.first || args.last, userConnectionFilter);
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
        }
      }
    }
    //userSettings: UserSettingsObject
  })
});

// export const PrivateUser = new GraphQLObjectType({
//   name: 'PrivateUser',
//   interfaces: [nodeInterface],
//   fields: () => {
//     id: { type: new GraphQLNonNull(GraphQLID) },
//     index: { type: new GraphQLNonNull(GraphQLInt) },
//     username: { type: new GraphQLNonNull(GraphQLString) },
//     password: { type: new GraphQLNonNull(GraphQLString) },
//     pgpPublic: { type: new GraphQLNonNull(GraphQLString) },
//     name: { type: GraphQLString },
//     //userSettings: UserSettingsObject
//   }
// })

// export const {
//   connectionType: UserConnection,
//   edgeType: UserEdge
// } = connectionDefinitions({ name: 'User', nodeType: UserType });
export const {
  connectionType: UserNotesConnection,
  edgeType: UserNotesEdge
} = connectionDefinitions({ name: 'UserNotes', nodeType: NoteType })