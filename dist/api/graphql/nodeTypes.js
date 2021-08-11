"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noteType = void 0;

var _graphql = require("graphql");

const noteType = new _graphql.GraphQLObjectType({
  name: 'Note',
  fields: {
    _id: {
      type: _graphql.GraphQLID
    },
    content: {
      type: _graphql.GraphQLString
    }
  }
});
exports.noteType = noteType;