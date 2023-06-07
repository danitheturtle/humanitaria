"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notes = exports.note = void 0;
var _graphql = require("graphql");
var _graphqlRelay = require("graphql-relay");
var _utils = require("../graph/utils");
var _types = require("../types");
var _db = _interopRequireDefault(require("../db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const notes = {
  type: _types.QueryNotesConnection,
  args: _graphqlRelay.connectionArgs,
  resolve: async (_, args) => {
    const cursorId = parseInt(args.after || args.before || "0");
    const dirComparator = args.after ? '>' : '<';
    const dbResult = await _db.default.getNotesConnection(cursorId, dirComparator, args.first || args.last);
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
};
exports.notes = notes;
const note = {
  type: _types.NoteType,
  args: {
    input: {
      type: new _graphql.GraphQLInputObjectType({
        name: 'noteInput',
        fields: {
          id: {
            type: _graphql.GraphQLID
          }
        }
      })
    }
  },
  resolve: async (_, args) => {
    const id = (0, _utils.fromGlobalId)(args.id, 'Note');
    return await _db.default.getNote(id);
  }
};
exports.note = note;