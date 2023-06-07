"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signOut = exports.signIn = void 0;
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _graphqlRelay = require("graphql-relay");
var _graphql = require("graphql");
var _validator = require("validator");
var _types = require("../types");
var _validators = require("../utils/validators");
var _db = _interopRequireDefault(require("../db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const comparePasswords = async (userData, inputPassword) => await new Promise((res, rej) => {
  _bcrypt.default.compare(inputPassword, userData.password, (err, passwordsMatch) => {
    if (err) rej(err);
    res(passwordsMatch);
  });
});
const signIn = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'signIn',
  inputFields: {
    usernameOrEmail: {
      type: _graphql.GraphQLString
    },
    passwordHash: {
      type: _graphql.GraphQLString
    }
  },
  outputFields: {
    me: {
      type: _types.UserType
    }
  },
  mutateAndGetPayload: async ({
    usernameOrEmail,
    passwordHash
  }, ctx) => {
    const loginName = (0, _validator.whitelist)((0, _validator.trim)(usernameOrEmail), _validators.usernameChars);
    if ((0, _validator.isEmpty)(loginName)) throw new Error("Invalid or missing user string");
    const userSelector = [];
    if ((0, _validator.isEmail)(loginName)) {
      const email = (0, _validator.normalizeEmail)(loginName);
      userSelector.push('email');
      userSelector.push('=');
      userSelector.push(email);
    } else {
      const username = loginName;
      userSelector.push('username');
      userSelector.push('=');
      userSelector.push(username);
    }
    if ((0, _validator.isEmpty)(passwordHash)) throw new Error("Missing password");
    const users = await _db.default.dbRef.table("users").where(...userSelector).whereNotNull("password").orderBy("email_verified", "asc").select('*');
    if (users instanceof Array) {
      for (const user of users) {
        const valid = await comparePasswords(user, passwordHash);
        if (valid) {
          const me = await ctx.signIn(user);
          return {
            me
          };
        }
      }
    } else {
      const valid = await comparePasswords(users, passwordHash);
      if (valid) {
        const me = await ctx.signIn(users);
        return {
          me
        };
      }
    }
    throw new Error("Wrong Email or Password");
  }
});
exports.signIn = signIn;
const signOut = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'signOut',
  inputFields: {},
  outputFields: {},
  mutateAndGetPayload: (_, ctx) => {
    ctx.signOut();
  }
});
exports.signOut = signOut;