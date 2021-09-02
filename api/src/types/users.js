import { GraphQLObjectType, GraphQLInt, GraphQLBoolean, GraphQLID, GraphQLString, GraphQLNonNull } from 'graphql';
import { globalIdField, connectionDefinitions } from "graphql-relay";
import { nodeInterface } from '../graph/nodeDefinitions';
// import db from '../db';

export const UserType = new GraphQLObjectType({
  name: 'User',
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField('User'),
    uid: { type: new GraphQLNonNull(GraphQLID) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (self, _, ctx) => {
        ctx.ensureAuthorized(ctxUser => ctxUser.id === self.id);
        return self.password;
      }
    },
    picture: { type: GraphQLString },
    name: { type: GraphQLString },
    legal_name: { type: GraphQLString },
    timezone: { type: GraphQLString },
    locale: { type: GraphQLString },
    last_login: { type: GraphQLString },
    email_verified: { type: GraphQLBoolean },
    admin: { type: GraphQLBoolean },
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

export const {
  connectionType: UserConnection,
  edgeType: UserEdge
} = connectionDefinitions({ name: 'User', nodeType: UserType });