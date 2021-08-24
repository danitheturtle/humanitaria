import { match } from 'path-to-regexp';
import { loadQuery } from "react-relay";
import { NotFoundError } from '../errors';
import homeRoute from './home';
import landingRoute from './landing';

const routes = [
  homeRoute,
  landingRoute
];

const matchCache = {};
const matchUrlPath = (route, currentUserPath) => {
  const cacheKey = route instanceof Array ? route.join("::") : route;
  const cachedFunction = matchCache[cacheKey];
  if (cachedFunction) return cachedFunction(currentUserPath);
  const evalMatchResult = match(route, { decode: decodeURIComponent });
  matchCache[cacheKey] = evalMatchResult;
  return evalMatchResult(currentUserPath);
};

export function resolveRoute(routerCtx) {
  try {
    const { path, relay } = routerCtx;
    
    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      const evalMatchResult = matchUrlPath(route.path, path);
      if (!evalMatchResult) continue;
      routerCtx.params = evalMatchResult.params

      const variables = typeof route.variables === 'function' ?
        route.variables(routerCtx) :
        route.variables ?
        route.variables :
        Object.keys(evalMatchResult.params).length > 0 ?
        evalMatchResult.params :
        {};

      const queryRef = route.query && loadQuery(relay, route.query, variables, {
        fetchPolicy: "store-or-network"
      });

      const pageSettings = route.getPageSettings(queryRef, routerCtx);
      if (pageSettings) return { component: route.component, ...pageSettings }
    }
    throw new NotFoundError();
  } catch (error) {
    return {
      title: error instanceof NotFoundError ? "Page Not Found" : "Application Error",
      error
    };
  }
}
