import bcrypt from 'bcrypt';
import { mutationWithClientMutationId } from "graphql-relay";
import { GraphQLString } from "graphql";
import { whitelist, isEmpty, isEmail, normalizeEmail, trim } from 'validator';
import { UserType } from '../types';
import { usernameChars } from '../utils/validators';
import db from '../db';

const comparePasswords = async (userData, inputPassword) => await new Promise((res, rej) => {
  bcrypt.compare(inputPassword, userData.password, (err, passwordsMatch) => {
    if (err) rej(err);
    res(passwordsMatch);
  });
});

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
    const loginName = whitelist(trim(usernameOrEmail), usernameChars);
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
    
    const users = await db.dbRef
      .table("users")
      .where(...userSelector)
      .whereNotNull("password")
      .orderBy("email_verified", "asc")
      .select('*');
    if (users instanceof Array) {
      for (const user of users) {
        const valid = await comparePasswords(user, passwordHash);
        if (valid) {
          const me = await ctx.signIn(user);
          return { me };
        }
      }
    } else {
      const valid = await comparePasswords(users, passwordHash);
      if (valid) {
        const me = await ctx.signIn(users);
        return { me }
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