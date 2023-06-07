"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserType = exports.UserNotesEdge = exports.UserNotesConnection = void 0;
var _graphql = require("graphql");
var _graphqlRelay = require("graphql-relay");
var _nodeDefinitions = require("../graph/nodeDefinitions");
var _types = require("../types");
var _db = _interopRequireDefault(require("../db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const UserType = new _graphql.GraphQLObjectType({
  name: 'User',
  interfaces: [_nodeDefinitions.nodeInterface],
  fields: () => ({
    id: (0, _graphqlRelay.globalIdField)('User'),
    uid: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
    },
    username: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    password: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
      resolve: (source, _, ctx) => {
        ctx.ensureAuthorized(ctxUser => ctxUser.uid === source.uid);
        return source.password;
      }
    },
    email: {
      type: _graphql.GraphQLString
    },
    picture: {
      type: _graphql.GraphQLString
    },
    name: {
      type: _graphql.GraphQLString
    },
    legal_name: {
      type: _graphql.GraphQLString
    },
    timezone: {
      type: _graphql.GraphQLString
    },
    locale: {
      type: _graphql.GraphQLString
    },
    last_login: {
      type: _graphql.GraphQLString
    },
    email_verified: {
      type: _graphql.GraphQLBoolean
    },
    admin: {
      type: _graphql.GraphQLBoolean
    },
    notes: {
      type: UserNotesConnection,
      args: _graphqlRelay.connectionArgs,
      resolve: async (source, args) => {
        const userConnectionFilter = queries => queries.map(query => query.where('uid', source.uid));
        const cursorId = parseInt(args.after || args.before || "0");
        const dirComparator = args.after ? '>' : '<';
        const dbResult = await _db.default.getNotesConnection(cursorId, dirComparator, args.first || args.last, userConnectionFilter);
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
exports.UserType = UserType;
const {
  connectionType: UserNotesConnection,
  edgeType: UserNotesEdge
} = (0, _graphqlRelay.connectionDefinitions)({
  name: 'UserNotes',
  nodeType: _types.NoteType
});
exports.UserNotesEdge = UserNotesEdge;
exports.UserNotesConnection = UserNotesConnection;