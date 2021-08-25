import { Request } from 'express';
import db from './db';
import { ForbiddenError, UnauthorizedError } from './error';

export class Context {
  static idToUser = {};
  static usernameToUser = {};
  req;
  user;
  constructor(req) {
    this.req = req;
    if (req?.user) {
      this.user = this.fetchAndCacheUser(req.user);
    }
  }
  
  fetchAndCacheUser(user) {
    if (Context.idToUser[user.id]) return Context.idToUser[user.id];
    if (Context.usernameToUser[user.username]) return Context.usernameToUser[username];
    const userData = db.getUser(user);
    updateCachedUser(userData);
    return user;
  }
  
  updateCachedUser(user) {
    Context.idToUser[user.id] = user;
    Context.usernameToUser[user.username] = user;
  }
}