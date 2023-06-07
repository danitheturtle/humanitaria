"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = exports.me = void 0;
var _graphql = require("graphql");
var _types = require("../types");
var _utils = require("../graph/utils");
const me = {
  type: _types.UserType,
  resolve: async (_, args, ctx) => {
    ctx.ensureAuthorized();
    return ctx.user;
  }
};
exports.me = me;
const user = {
  type: _types.UserType,
  args: {
    input: {
      type: new _graphql.GraphQLInputObjectType({
        name: 'userInput',
        fields: {
          id: {
            type: _graphql.GraphQLID
          },
          username: {
            type: _graphql.GraphQLString
          },
          email: {
            type: _graphql.GraphQLString
          },
          uid: {
            type: _graphql.GraphQLID
          }
        }
      })
    }
  },
  resolve: async (_, args, ctx) => {
    if (args.input.id) {
      const userIndex = (0, _utils.fromGlobalId)(args.input.id, 'User');
      return await ctx.getUserById(userIndex);
    } else if (args.input.uid) {
      return await ctx.getUserByUID(args.input.uid);
    } else if (args.input.username) {
      return await ctx.getUserByUsername(args.input.username);
    } else if (args.input.email) {
      return await ctx.getUserByEmail(args.input.email);
    }
  }
};
exports.user = user;