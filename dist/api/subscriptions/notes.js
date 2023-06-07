"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noteUpdated = exports.noteDeleted = exports.noteCreated = void 0;
var _graphqlRelaySubscription = require("graphql-relay-subscription");
var _types = require("../types");
const noteUpdated = (0, _graphqlRelaySubscription.subscriptionWithClientId)({
  name: 'noteUpdated',
  inputFields: {},
  outputFields: {
    note: {
      type: _types.NoteType
    }
  },
  subscribe: (_, ctx) => ctx.subscribe('noteUpdated')
});
exports.noteUpdated = noteUpdated;
const noteCreated = (0, _graphqlRelaySubscription.subscriptionWithClientId)({
  name: 'noteCreated',
  inputFields: {},
  outputFields: {
    noteEdge: {
      type: _types.QueryNotesEdge,
      resolve: source => ({
        cursor: source.id,
        node: source
      })
    }
  },
  subscribe: (_, ctx) => ctx.subscribe('noteCreated')
});
exports.noteCreated = noteCreated;
const noteDeleted = (0, _graphqlRelaySubscription.subscriptionWithClientId)({
  name: 'noteDeleted',
  inputFields: {},
  outputFields: {
    note: {
      type: _types.NoteType
    }
  },
  subscribe: (_, ctx) => ctx.subscribe('noteDeleted')
});
exports.noteDeleted = noteDeleted;