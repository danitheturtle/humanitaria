import { Request } from 'express';
import { ForbiddenError, UnauthorizedError } from './error';
import { fromGlobalId } from './graph/utils';
import db from './db';

export class Context {
  static userCache = {
    byId: {},
    byUID: {},
    byUsername: {},
    byEmail: {}
  }
  
  constructor(req) {
    this.req = req;
  }
  
  get user() {
    return this.req.user;
  }
  
  signIn(userData) {
    return this.req.signIn(userData).then(Context.cacheUser);
  }
  
  signOut() {
    this.req.signOut();
  }
  
  ensureAuthorized(authCallback) {
    if (process.env.APP_ENV === 'development') return;
    if (!this.req.user) throw new UnauthorizedError();
    if (authCallback && !authCallback(this.req.user)) {
      throw new ForbiddenError();
    }
  }
  
  cacheUser(userData) { return Context.cacheUser(userData); }
  static cacheUser(userData) {
    Context.userCache.byId[userData.id] = userData;
    Context.userCache.byUID[userData.uid] = userData;
    Context.userCache.byUsername[userData.username] = userData;
    Context.userCache.byEmail[userData.email] = userData;
    return userData;
  }
  deleteUser(userData) { return Context.deleteUser(userData); }
  static deleteUser(userData) {
    delete Context.userCache.byId[userData.id];
    delete Context.userCache.byUID[userData.uid];
    delete Context.userCache.byUsername[userData.username];
    delete Context.userCache.byEmail[userData.email];
  }
  
  async getUserById(id) { return await Context.getUserById(id); }
  static async getUserById(id) {
    if (!Context.userCache.byId[id]) {
      const userData = await db.getUser({ id });
      if (userData) {
        Context.cacheUser(userData);
      } else {
        return undefined;
      }
    }
    return Context.userCache.byId[id];
  }
  
  async getUserByUID(uid) { return await Context.getUserByUID(uid); }
  static async getUserByUID(uid) {
    if (!Context.userCache.byUID[uid]) {
      const userData = await db.getUser({ uid });
      if (userData) {
        Context.cacheUser(userData);
      } else {
        return undefined;
      }
    }
    return Context.userCache.byUID[uid];
  }
  
  async getUserByUsername(username) { return await Context.getUserByUsername(username); }
  static async getUserByUsername(username) {
    if (!Context.userCache.byUsername[username]) {
      const userData = await db.getUser({ username });
      if (userData) {
        Context.cacheUser(userData);
      } else {
        return undefined;
      }
    }
    return Context.userCache.byUsername[username];
  }
  
  async getUserByEmail(email) { return await Context.getUserByEmail(email); }
  static async getUserByEmail(email) {
    if (!Context.userCache.byEmail[email]) {
      const userData = await db.getUser({ email });
      if (userData) {
        Context.cacheUser(userData);
      } else {
        return undefined;
      }
    }
    return Context.userCache.byEmail[email];
  }
}