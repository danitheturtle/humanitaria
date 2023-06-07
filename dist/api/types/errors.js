"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorType = exports.ErrorListType = void 0;
var _graphql = require("graphql");
const ErrorType = new _graphql.GraphQLObjectType({
  name: 'Error',
  fields: () => ({
    code: {
      type: _graphql.GraphQLInt
    },
    message: {
      type: _graphql.GraphQLString
    },
    forInputWithId: {
      type: _graphql.GraphQLString
    }
  })
});
exports.ErrorType = ErrorType;
const ErrorListType = new _graphql.GraphQLObjectType({
  name: 'ErrorList',
  fields: () => ({
    errors: new _graphql.GraphQLList(ErrorType)
  })
});
exports.ErrorListType = ErrorListType;