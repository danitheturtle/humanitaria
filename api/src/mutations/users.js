import { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLBoolean, GraphQLID, GraphQLString, GraphQLNonNull } from 'graphql';  
import { mutationWithClientMutationId } from "graphql-relay";
import nanoid from 'nanoid';
import { InputError, ForbiddenError, validatorResultToErrorList } from '../error';
import { validateAndCleanInput, idCharacters } from '../utils/validators';
import { UserType, ErrorType } from '../types';
import db from '../db';
const newUserId = nanoid.customAlphabet(idCharacters, 9);

export const createUser = mutationWithClientMutationId({
  name: 'createUser',
  inputFields: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    passwordHash: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLString }
  },
  outputFields: {
    me: { type: UserType }
  },
  mutateAndGetPayload: async (args, ctx) => {
    const [cleanedInput, validationResult] = validateAndCleanInput(args, ['username', 'passwordHash']);
    if ((cleanedInput.email && validationResult.email) || validationResult.passwordHash || validationResult.username) {
      throw new Error("Validation error");
    }
    const matchingUsername = await ctx.getUserByUsername(cleanedInput.username);
    if (matchingUsername) { throw new Error("Username already exists"); }
    if (cleanedInput.email) {
      const matchingVerifiedEmail = await db.getUserWithVerifiedEmail(cleanedInput.email);
      if (matchingVerifiedEmail) { throw new Error("Email already registered"); }
    }
    
    let newUID, uidUsed;
    do {
      newUID = newUserId();
      uidUsed = await ctx.getUserByUID(newUID);
    } while (uidUsed);
    cleanedInput.uid = newUID;
    const newAccount = await db.createUser(cleanedInput);
    ctx.cacheUser(newAccount);
    return { me: newAccount }
  }
});

const includeField = (fieldName, inputId, includedFields, cleanedInput, validationResult, partialErrors) => {
  if (cleanedInput[fieldName]) {
    if (validationResult[fieldName]) {
      partialErrors.push.apply(partialErrors, validatorResultToErrorList(validationResult[fieldName], inputId));
    } else {
      includedFields[fieldName] = cleanedInput[fieldName];
    }
  }
}

export const deleteUser = mutationWithClientMutationId({
  name: 'deleteUser',
  inputFields: {
    uid: { type: GraphQLID }
  },
  outputFields: {
    user: {
      type: UserType,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: async (args, ctx) => {
    const [cleanedInput, validationResult] = validateAndCleanInput(args);
    if (validationResult.uid) return new Error("UID is required to delete user");
    ctx.ensureAuthorized(ctxUser => ctxUser.id === args.id);
    const userExists = await ctx.getUserByUID(cleanedInput.uid);
    if (!userExists) throw new Error("No user with that UID");
    const deletedUser = await db.deleteUser(cleanedInput);
    ctx.deleteUser(deletedUser);
    return { user: deletedUser };
  }
});

export const updateUser = mutationWithClientMutationId({
  name: 'updateUser',
  inputFields: {
    uid: { type: new GraphQLNonNull(GraphQLID) }, //this isn't changing, just used to lookup the user
    passwordHash: { type: new GraphQLNonNull(GraphQLID) },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    newPasswordHash: { type: GraphQLString },
    picture: { type: GraphQLString },
    name: { type: GraphQLString },
    legal_name: { type: GraphQLString },
    timezone: { type: GraphQLString },
    locale: { type: GraphQLString }
  },
  outputFields: {
    me: { type: UserType },
    partialErrors: { type: new GraphQLList(ErrorType) }
  },
  mutateAndGetPayload: async (args, ctx) => {
    const [cleanedInput, validationResult] = validateAndCleanInput(args, ['uid', 'passwordHash']);
    if (validationResult.uid) throw new Error('User id required to update user data');
    ctx.ensureAuthorized(loggedInUser => cleanedInput.uid === loggedInUser?.uid);
    const user = await ctx.getUserByUID(cleanedInput.uid);
    if (user.password !== cleanedInput.passwordHash) throw new ForbiddenError('Cannot update user, incorrect password');
    
    const partialErrors = [];
    const updateArgs = { uid: cleanedInput.uid };
    //username
    if (cleanedInput.username) {
      if (validationResult.username){
        partialErrors.push.apply(partialErrors, validatorResultToErrorList(validationResult.username, 'username'));
      } else {
        const matchingUsername = await ctx.getUserByUsername(cleanedInput.username);
        if (matchingUsername) {
          partialErrors.push(new InputError("Username already exists", 'username'));
        } else {
          updateArgs.username = cleanedInput.username;
        }
      }
    }
    //email
    if (cleanedInput.email) {
      if (validationResult.email) {
        partialErrors.push.apply(partialErrors, validatorResultToErrorList(validationResult.email, 'email'));
      } else {
        const matchingVerifiedEmail = await db.getUserWithVerifiedEmail(cleanedInput.email);
        if (matchingVerifiedEmail) {
          partialErrors.push(new InputError("Email already registered", 'email'));
        } else {
          updateArgs.email = cleanedInput.email;
        }
      }
    }
    //password
    if (cleanedInput.newPasswordHash) {
      if (validationResult.newPasswordHash) {
        partialErrors.push.apply(partialErrors, validatorResultToErrorList(validationResult.newPasswordHash, 'newPasswordHash'));
      } else {
        if (cleanedInput.newPasswordHash === user.password) {
          partialErrors.push(new InputError("New password cannot be the same as old password", 'password'))
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
    const updatedUserData = await db.updateUser(updateArgs);
    ctx.cacheUser(updatedUserData);
    return { me: updatedUserData, partialErrors: partialErrors };
  }
});