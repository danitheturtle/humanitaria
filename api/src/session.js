import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import db from './db';

async function getUser(req) {
  const cookies = cookie.parse(req?.headers?.cookie ?? "");
  const sessionCookie = cookies[process.env.JWT_COOKIE];
  if (sessionCookie) {
    try {
      const token = jwt.verify(sessionCookie, process.env.JWT_SECRET, {
        issuer: process.env.APP_ORIGIN,
        audience: process.env.APP_NAME
      });
      const user = await db.getUser({ id: token.sub });
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
  [user] = await db.dbRef
    .table('users')
    .where({ id: user.id })
    .update({ last_login: Date.now() })
    .returning("*");
  if (!user) {
    req.user = null;
    return null;
  }
  const sessioniCookie = jwt.sign({}, process.env.JWT_SECRET, {
    issuer: process.env.APP_ORIGIN,
    audience: process.env.APP_NAME,
    subject: user.id,
    expiresIn: process.env.JWT_EXPIRES
  });
  res.setHeader("Set-Cookie", cookie.serialize(process.env.JWT_COOKIE, sessioniCookie, {
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
  res.clearCookie(process.env.JWT_COOKIE)
}

export default async function session(req, res, next) {
  try {
    req.user = await getUser(req);
    req.signIn = signIn.bind(undefined, req, res);
    req.signOut = signOut.bind(undefined, req, res);
    if (req.query.authorize !== undefined && !req.user) {
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