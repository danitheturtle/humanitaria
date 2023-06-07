"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.deleteUser = exports.createUser = void 0;
var _graphql = require("graphql");
var _graphqlRelay = require("graphql-relay");
var _nanoid = _interopRequireDefault(require("nanoid"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _error = require("../error");
var _validators = require("../utils/validators");
var _types = require("../types");
var _db = _interopRequireDefault(require("../db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const newUserId = _nanoid.default.customAlphabet(_validators.idCharacters, 9);
const createUser = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'createUser',
  inputFields: {
    username: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    passwordHash: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    email: {
      type: _graphql.GraphQLString
    }
  },
  outputFields: {
    me: {
      type: _types.UserType
    }
  },
  mutateAndGetPayload: async (args, ctx) => {
    const [cleanedInput, validationResult] = (0, _validators.validateAndCleanInput)(args, ['username', 'passwordHash']);
    if (cleanedInput.email && validationResult.email || validationResult.passwordHash || validationResult.username) {
      throw new Error("Validation error");
    }
    const matchingUsername = await ctx.getUserByUsername(cleanedInput.username);
    if (matchingUsername) {
      throw new Error("Username already exists");
    }
    if (cleanedInput.email) {
      const matchingVerifiedEmail = await _db.default.getUserWithVerifiedEmail(cleanedInput.email);
      if (matchingVerifiedEmail) {
        throw new Error("Email already registered");
      }
    }
    let newUID, uidUsed;
    do {
      newUID = newUserId();
      uidUsed = await ctx.getUserByUID(newUID);
    } while (uidUsed);
    cleanedInput.uid = newUID;
    cleanedInput.passwordHash = await new Promise((res, rej) => {
      _bcrypt.default.hash(cleanedInput.passwordHash, 10, (err, hash) => {
        if (err) rej(err);
        res(hash);
      });
    });
    const newAccount = await _db.default.createUser(cleanedInput);
    ctx.cacheUser(newAccount);
    return {
      me: newAccount
    };
  }
});
exports.createUser = createUser;
const includeField = (fieldName, inputId, includedFields, cleanedInput, validationResult, partialErrors) => {
  if (cleanedInput[fieldName]) {
    if (validationResult[fieldName]) {
      partialErrors.push.apply(partialErrors, (0, _error.validatorResultToErrorList)(validationResult[fieldName], inputId));
    } else {
      includedFields[fieldName] = cleanedInput[fieldName];
    }
  }
};
const deleteUser = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'deleteUser',
  inputFields: {
    uid: {
      type: _graphql.GraphQLID
    }
  },
  outputFields: {
    user: {
      type: _types.UserType,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: async (args, ctx) => {
    const [cleanedInput, validationResult] = (0, _validators.validateAndCleanInput)(args);
    if (validationResult.uid) return new Error("UID is required to delete user");
    ctx.ensureAuthorized(ctxUser => ctxUser.id === args.id);
    const userExists = await ctx.getUserByUID(cleanedInput.uid);
    if (!userExists) throw new Error("No user with that UID");
    const deletedUser = await _db.default.deleteUser(cleanedInput);
    ctx.deleteUser(deletedUser);
    return {
      user: deletedUser
    };
  }
});
exports.deleteUser = deleteUser;
const updateUser = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'updateUser',
  inputFields: {
    uid: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
    },
    //this isn't changing, just used to lookup the user
    passwordHash: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
    },
    username: {
      type: _graphql.GraphQLString
    },
    email: {
      type: _graphql.GraphQLString
    },
    newPasswordHash: {
      type: _graphql.GraphQLString
    },
    picture: {
      type: _graphql.GraphQLString
    },
    name: {
      type: _graphql.GraphQLString
    },
    legal_name: {
      type: _graphql.GraphQLString
    },
    timezone: {
      type: _graphql.GraphQLString
    },
    locale: {
      type: _graphql.GraphQLString
    }
  },
  outputFields: {
    me: {
      type: _types.UserType
    },
    partialErrors: {
      type: new _graphql.GraphQLList(_types.ErrorType)
    }
  },
  mutateAndGetPayload: async (args, ctx) => {
    const [cleanedInput, validationResult] = (0, _validators.validateAndCleanInput)(args, ['uid', 'passwordHash']);
    if (validationResult.uid) throw new Error('User id required to update user data');
    ctx.ensureAuthorized(loggedInUser => cleanedInput.uid === (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.uid));
    const user = await ctx.getUserByUID(cleanedInput.uid);
    if (user.password !== cleanedInput.passwordHash) throw new _error.ForbiddenError('Cannot update user, incorrect password');
    const partialErrors = [];
    const updateArgs = {
      uid: cleanedInput.uid
    };
    //username
    if (cleanedInput.username) {
      if (validationResult.username) {
        partialErrors.push.apply(partialErrors, (0, _error.validatorResultToErrorList)(validationResult.username, 'username'));
      } else {
        const matchingUsername = await ctx.getUserByUsername(cleanedInput.username);
        if (matchingUsername) {
          partialErrors.push(new _error.InputError("Username already exists", 'username'));
        } else {
          updateArgs.username = cleanedInput.username;
        }
      }
    }
    //email
    if (cleanedInput.email) {
      if (validationResult.email) {
        partialErrors.push.apply(partialErrors, (0, _error.validatorResultToErrorList)(validationResult.email, 'email'));
      } else {
        const matchingVerifiedEmail = await _db.default.getUserWithVerifiedEmail(cleanedInput.email);
        if (matchingVerifiedEmail) {
          partialErrors.push(new _error.InputError("Email already registered", 'email'));
        } else {
          updateArgs.email = cleanedInput.email;
        }
      }
    }
    //password
    if (cleanedInput.newPasswordHash) {
      if (validationResult.newPasswordHash) {
        partialErrors.push.apply(partialErrors, (0, _error.validatorResultToErrorList)(validationResult.newPasswordHash, 'newPasswordHash'));
      } else {
        if (cleanedInput.newPasswordHash === user.password) {
          partialErrors.push(new _error.InputError("New password cannot be the same as old password", 'password'));
        } else {
          updateArgs.password = cleanedInput.newPasswordHash;
        }
      }
    }
    includeField('picture', 'picture', updateArgs, cleanedInput, validationResult, partialErrors);
    includeField('name', 'name', updateArgs, cleanedInput, validationResult, partialErrors);
    includeField('legal_name', 'legal_name', updateArgs, cleanedInput, validationResult, partialErrors);
    includeField('timezone', 'timezone', updateArgs, cleanedInput, validationResult, partialErrors);
    includeField('locale', 'locale', updateArgs, cleanedInput, validationResult, partialErrors);
    const updatedUserData = await _db.default.updateUser(updateArgs);
    ctx.cacheUser(updatedUserData);
    return {
      me: updatedUserData,
      partialErrors: partialErrors
    };
  }
});
exports.updateUser = updateUser;