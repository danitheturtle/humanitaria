"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotesQuery = void 0;

var _nodeTypes = require("../nodeTypes");

var _graphql = require("graphql");

var _NoteService = _interopRequireDefault(require("../../services/NoteService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NotesQuery = {
  type: (0, _graphql.GraphQLList)(_nodeTypes.noteType),
  args: {},
  resolve: async () => {
    const noteService = new _NoteService.default();
    const notes = await noteService.getAllNotes();
    return notes;
  }
};
exports.NotesQuery = NotesQuery;