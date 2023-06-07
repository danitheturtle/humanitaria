"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryNotesEdge = exports.QueryNotesConnection = exports.NoteType = void 0;
var _graphql = require("graphql");
var _graphqlRelay = require("graphql-relay");
var _nodeDefinitions = require("../graph/nodeDefinitions");
var _types = require("../types");
var _db = _interopRequireDefault(require("../db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NoteType = new _graphql.GraphQLObjectType({
  name: 'Note',
  interfaces: [_nodeDefinitions.nodeInterface],
  fields: () => ({
    id: (0, _graphqlRelay.globalIdField)('Note'),
    content: {
      type: _graphql.GraphQLString
    },
    likes: {
      type: _graphql.GraphQLInt
    },
    user: {
      type: _types.UserType,
      resolve: source => _db.default.getUser({
        uid: source.uid
      })
    }
  })
});
exports.NoteType = NoteType;
const {
  connectionType: QueryNotesConnection,
  edgeType: QueryNotesEdge
} = (0, _graphqlRelay.connectionDefinitions)({
  name: 'Note',
  nodeType: NoteType
});
exports.QueryNotesEdge = QueryNotesEdge;
exports.QueryNotesConnection = QueryNotesConnection;