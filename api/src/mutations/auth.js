import bcrypt from 'bcrypt';
import nanoid from 'nanoid';
import { mutationWithClientMutationId } from "graphql-relay";
import { GraphQLString, GraphQLNonNull } from "graphql";
import { whitelist, isEmpty, isEmail, normalizeEmail, trim } from 'validator';
import { UserType } from '../types';
import { idCharacters } from '../utils/validators';
import { validateAndCleanInput, validCharacters } from '../utils/validators';
import db from '../db';
const newUserId = nanoid.customAlphabet(idCharacters, 9);

export const signIn = mutationWithClientMutationId({
  name: 'signIn',
  inputFields: {
    usernameOrEmail: { type: GraphQLString },
    passwordHash: { type: GraphQLString }
  },
  outputFields: {
    me: { type: UserType }
  },
  mutateAndGetPayload: async ({ usernameOrEmail, passwordHash }, ctx) => {
    const loginName = whitelist(trim(usernameOrEmail), validCharacters);
    if (isEmpty(loginName)) throw new Error("Invalid or missing user string");
    
    const userSelector = [];
    if (isEmail(loginName)) {
      const email = normalizeEmail(loginName);
      userSelector.push('email');
      userSelector.push('=');
      userSelector.push(email)
    } else {
      const username = loginName;
      userSelector.push('username');
      userSelector.push('=');
      userSelector.push(username);
    }
    
    if (isEmpty(passwordHash)) throw new Error("Missing password")
    
    const users = db.dbRef
      .table("users")
      .where(...userSelector)
      .whereNotNull("password")
      .orderBy("email_verified", "asc")
      .select();
      
    for (const user of users) {
      const valid = passwordHash === user.password;
      if (valid) {
        const me = await ctx.signIn(user);
        return { me };
      }
    }
    throw new Error("Wrong Email or Password")
  }
});


export const signOut = mutationWithClientMutationId({
  name: 'signOut',
  inputFields: {},
  outputFields: {},
  mutateAndGetPayload: (_, ctx) => {
    ctx.signOut();
  }
});

export const createAccount = mutationWithClientMutationId({
  name: 'createAccount',
  inputFields: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    passwordHash: { type: new GraphQLNonNull(GraphQLString) }
  },
  outputFields: {
    me: { type: UserType }
  },
  mutateAndGetPayload: async (args, ctx) => {
    const [cleanedInput, validationResult] = validateAndCleanInput(args, ['username', 'email', 'passwordHash']);
    if (validationResult.email || validationResult.passwordHash || validationResult.username) {
      throw new Error("Validation error");
    }
    const matchingUsername = await ctx.getUserByUsername(cleanedInput.username);
    if (matchingUsername) { throw new Error("Username already exists"); }
    const matchingVerifiedEmail = await db.getUserWithVerifiedEmail(cleanedInput.email);
    if (matchingVerifiedEmail) { throw new Error("Email already registered"); }
    
    let newId, idUsed;
    do {
      newId = newUserId();
      idUsed = await ctx.getUserById(newId);
    } while (idUsed);
    cleanedInput.id = newId;
    const newAccount = db.createUser(cleanedInput);
    ctx.cacheUser(newAccount);
    return { me: newAccount }
  }
})