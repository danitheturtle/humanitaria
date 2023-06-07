"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Context = void 0;
var _error = require("../error");
var _db = _interopRequireDefault(require("../db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class Context {
  constructor(req, pubsubProvider) {
    this.req = req;
    this.pubsub = pubsubProvider;
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
  subscribe(subscriptionTypeOrTypes) {
    return this.pubsub.asyncIterator(subscriptionTypeOrTypes);
  }
  //publish an event to listening subscribers. standard http queries/mutations can trigger these
  publish(...args) {
    this.pubsub.publish(...args);
  }
  ensureAuthorized(authCallback) {
    if (process.env.APP_ENV === 'development') return;
    if (!this.user) throw new _error.UnauthorizedError();
    if (authCallback && !authCallback(this.user)) {
      throw new _error.ForbiddenError();
    }
  }
  cacheUser(userData) {
    return Context.cacheUser(userData);
  }
  static cacheUser(userData) {
    Context.userCache.byId[userData.id] = userData;
    Context.userCache.byUID[userData.uid] = userData;
    Context.userCache.byUsername[userData.username] = userData;
    Context.userCache.byEmail[userData.email] = userData;
    return userData;
  }
  deleteUser(userData) {
    return Context.deleteUser(userData);
  }
  static deleteUser(userData) {
    delete Context.userCache.byId[userData.id];
    delete Context.userCache.byUID[userData.uid];
    delete Context.userCache.byUsername[userData.username];
    delete Context.userCache.byEmail[userData.email];
  }
  async getUserById(id) {
    return await Context.getUserById(id);
  }
  static async getUserById(id) {
    if (!Context.userCache.byId[id]) {
      const userData = await _db.default.getUser({
        id
      });
      if (userData) {
        Context.cacheUser(userData);
      } else {
        return undefined;
      }
    }
    return Context.userCache.byId[id];
  }
  async getUserByUID(uid) {
    return await Context.getUserByUID(uid);
  }
  static async getUserByUID(uid) {
    if (!Context.userCache.byUID[uid]) {
      const userData = await _db.default.getUser({
        uid
      });
      if (userData) {
        Context.cacheUser(userData);
      } else {
        return undefined;
      }
    }
    return Context.userCache.byUID[uid];
  }
  async getUserByUsername(username) {
    return await Context.getUserByUsername(username);
  }
  static async getUserByUsername(username) {
    if (!Context.userCache.byUsername[username]) {
      const userData = await _db.default.getUser({
        username
      });
      if (userData) {
        Context.cacheUser(userData);
      } else {
        return undefined;
      }
    }
    return Context.userCache.byUsername[username];
  }
  async getUserByEmail(email) {
    return await Context.getUserByEmail(email);
  }
  static async getUserByEmail(email) {
    if (!Context.userCache.byEmail[email]) {
      const userData = await _db.default.getUser({
        email
      });
      if (userData) {
        Context.cacheUser(userData);
      } else {
        return undefined;
      }
    }
    return Context.userCache.byEmail[email];
  }
}
exports.Context = Context;
_defineProperty(Context, "userCache", {
  byId: {},
  byUID: {},
  byUsername: {},
  byEmail: {}
});