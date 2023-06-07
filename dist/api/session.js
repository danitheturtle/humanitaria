"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = session;
var _cookie = _interopRequireDefault(require("cookie"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _context = require("./context");
var _db = _interopRequireDefault(require("./db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function getUser(req) {
  var _req$headers;
  const cookies = _cookie.default.parse((req === null || req === void 0 ? void 0 : (_req$headers = req.headers) === null || _req$headers === void 0 ? void 0 : _req$headers.cookie) ?? "");
  const sessionCookie = cookies[process.env.JWT_COOKIE];
  if (sessionCookie) {
    try {
      const token = _jsonwebtoken.default.verify(sessionCookie, process.env.JWT_SECRET, {
        issuer: process.env.APP_ORIGIN,
        audience: process.env.APP_NAME
      });
      const user = await _context.Context.getUserByUID(token.sub); // await db.getUser({ uid: token.sub });
      return user || null;
    } catch (err) {
      console.error(err);
    }
  }
  return null;
}
//At this point, the sign in mutation already verified their credentials. This function sets the login cookie and updates last_login
async function signIn(req, res, user) {
  if (!user) return null;
  [user] = await _db.default.dbRef.table('users').where({
    uid: user.uid
  }).update({
    last_login: new Date().toISOString()
  }).returning("*");
  if (!user) {
    req.user = null;
    return null;
  }
  const sessioniCookie = _jsonwebtoken.default.sign({}, process.env.JWT_SECRET, {
    issuer: process.env.APP_ORIGIN,
    audience: process.env.APP_NAME,
    subject: user.uid,
    expiresIn: process.env.JWT_EXPIRES
  });
  res.setHeader("Set-Cookie", _cookie.default.serialize(process.env.JWT_COOKIE, sessioniCookie, {
    httpOnly: true,
    maxAge: process.env.JWT_EXPIRES,
    secure: process.env.APP_ENV === "production",
    path: "/"
  }));
  req.user = user;
  return user;
}
function signOut(req, res) {
  req.user = null;
  res.clearCookie(process.env.JWT_COOKIE);
}
async function session(req, res, next) {
  try {
    var _req$query;
    req.user = await getUser(req);
    req.signIn = signIn.bind(undefined, req, res);
    req.signOut = signOut.bind(undefined, req, res);
    if ((req === null || req === void 0 ? void 0 : (_req$query = req.query) === null || _req$query === void 0 ? void 0 : _req$query.authorize) !== undefined && !req.user) {
      res.status(401);
      res.end();
    } else {
      next();
    }
  } catch (err) {
    console.error(err);
    next();
  }
}