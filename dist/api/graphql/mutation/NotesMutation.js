"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateNoteMutation = exports.DeleteNoteMutation = exports.CreateNoteMutation = void 0;

var _nodeTypes = require("../nodeTypes");

var _graphql = require("graphql");

var _NoteService = _interopRequireDefault(require("../../services/NoteService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CreateNoteMutation = {
  type: _nodeTypes.noteType,
  args: {
    content: {
      type: _graphql.GraphQLString
    }
  },
  resolve: async (_, {
    content
  }) => {
    const noteService = new _NoteService.default();
    const newNote = await noteService.createNote({
      content
    });
    return newNote;
  }
};
exports.CreateNoteMutation = CreateNoteMutation;
const DeleteNoteMutation = {
  type: _graphql.GraphQLID,
  args: {
    _id: {
      type: _graphql.GraphQLID
    }
  },
  resolve: async (_, {
    _id
  }) => {
    const noteService = new _NoteService.default();
    const res = await noteService.deleteNote(_id);

    if (res.ok) {
      return _id;
    }
  }
};
exports.DeleteNoteMutation = DeleteNoteMutation;
const UpdateNoteMutation = {
  type: _nodeTypes.noteType,
  args: {
    _id: {
      type: _graphql.GraphQLID
    },
    content: {
      type: _graphql.GraphQLString
    }
  },
  resolve: async (_, {
    _id,
    content
  }) => {
    const noteService = new _NoteService.default();
    const updatedNote = await noteService.updateNote(_id, {
      content
    });
    return updatedNote;
  }
};
exports.UpdateNoteMutation = UpdateNoteMutation;