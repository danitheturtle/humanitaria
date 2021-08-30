import { GraphQLObjectType, GraphQLInt, GraphQLBoolean, GraphQLID, GraphQLString, GraphQLNonNull } from 'graphql';  
import { mutationWithClientMutationId } from "graphql-relay";
import { InputError, ForbiddenError } from '../error';
import { UserType } from '../types';

const includeField = (fieldName, inputId, includedFields, cleanedInput, validationResult, partialErrors) => {
  if (cleanedInput[fieldName]) {
    if (validationResult[fieldName]) {
      partialErrors.push(new InputError(validationResult[fieldName], inputId));
    } else {
      includedFields[fieldName] = cleanedInput[fieldName];
    }
  }
}

export const updateUser = mutationWithClientMutationId({
  name: 'updateUser',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) }, //this isn't changing, just used to lookup the user
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
    partialErrors: { type: InputError }
  },
  mutateAndGetPayload: async (args, ctx) => {
    const [cleanedInput, validationResult] = validateAndCleanInput(args, ['id', 'passwordHash']);
    if (validationResult.id) throw new Error('User id required to update user data');
    ctx.ensureAuthorized(loggedInUser => cleanedInput.id === loggedInUser?.id);
    const user = ctx.getUserById(cleanedInput.id);
    //todo: add replay attack protection to the password hash system
    if (user.password !== cleanedInput.passwordHash) throw new ForbiddenError('Cannot update user, incorrect password');
    
    const partialErrors = [];
    const updateArgs = { id: cleanedInput.id };
    //username
    if (cleanedInput.username) {
      if (validationResult.username){
        partialErrors.push(new InputError(validationResult.username, 'username'));
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
        partialErrors.push(new InputError(validationResult.email, 'email'));
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
        partialErrors.push(new InputError(validationResult.newPasswordHash, 'password'));
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
    
    const updatedUserData = db.updateUser(updateArgs);
    ctx.cacheUser(updatedUserData);
    return { me: updateUserData, partialErrors: partialErrors };
  }
});