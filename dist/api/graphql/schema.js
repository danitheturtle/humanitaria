"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _NotesQuery = require("./query/NotesQuery");

var _NotesMutation = require("./mutation/NotesMutation");

const QueryType = new _graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    notes: _NotesQuery.NotesQuery
  })
});
const MutationType = new _graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createNote: _NotesMutation.CreateNoteMutation,
    deleteNote: _NotesMutation.DeleteNoteMutation,
    updateNote: _NotesMutation.UpdateNoteMutation
  })
});
const schema = new _graphql.GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});
var _default = schema;
exports.default = _default;