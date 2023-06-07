"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNote = exports.likeNote = exports.deleteNote = exports.createNote = void 0;
var _types = require("../types");
var _graphql = require("graphql");
var _graphqlRelay = require("graphql-relay");
var _utils = require("../graph/utils");
var _db = _interopRequireDefault(require("../db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const createNote = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'createNote',
  inputFields: {
    content: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  },
  outputFields: {
    noteEdge: {
      type: _types.QueryNotesEdge,
      resolve: source => ({
        cursor: source.id,
        node: source
      })
    }
  },
  mutateAndGetPayload: async ({
    content
  }, ctx /*, info*/) => {
    const createdNote = await _db.default.createNote({
      content,
      uid: ctx.user.uid
    });
    ctx.publish('noteCreated', createdNote);
    return createdNote;
  }
});
exports.createNote = createNote;
const deleteNote = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'deleteNote',
  inputFields: {
    id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
    }
  },
  outputFields: {
    note: {
      type: _types.NoteType
    }
  },
  mutateAndGetPayload: async ({
    id
  }, ctx) => {
    const deletedNote = await _db.default.deleteNote((0, _utils.fromGlobalId)(id, "Note"));
    ctx.publish('noteDeleted', {
      note: deletedNote
    });
    return {
      note: deletedNote
    };
  }
});
exports.deleteNote = deleteNote;
const updateNote = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'updateNote',
  inputFields: {
    id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
    },
    content: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  },
  outputFields: {
    note: {
      type: _types.NoteType
    }
  },
  mutateAndGetPayload: async ({
    id,
    content
  }, ctx) => {
    const updatedNote = await _db.default.updateNote({
      id: (0, _utils.fromGlobalId)(id, "Note"),
      content
    });
    ctx.publish('noteUpdated', {
      note: updatedNote
    });
    return {
      note: updatedNote
    };
  }
});
exports.updateNote = updateNote;
const likeNote = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'likeNote',
  inputFields: {
    id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
    }
  },
  outputFields: {
    note: {
      type: _types.NoteType
    }
  },
  mutateAndGetPayload: async ({
    id
  }, ctx) => {
    const likedNote = await _db.default.getNote((0, _utils.fromGlobalId)(id, "Note"));
    const updatedNote = await _db.default.updateNote({
      id: (0, _utils.fromGlobalId)(id, "Note"),
      likes: likedNote.likes + 1
    });
    ctx.publish('noteUpdated', {
      note: updatedNote
    });
    return {
      note: updatedNote
    };
  }
});
exports.likeNote = likeNote;