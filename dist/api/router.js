"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = void 0;
var _express = require("express");
var _expressGraphql = require("express-graphql");
var _graphql = require("graphql");
var _middleware = require("graphql-voyager/middleware");
var _context = require("./context");
var _schema = _interopRequireDefault(require("./graph/schema"));
var _configureSubscriptions = require("./graph/configureSubscriptions");
var _session = _interopRequireDefault(require("./session"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const api = (0, _express.Router)();
exports.api = api;
api.use(_session.default);

// Generates interactive UML diagram for the API schema
// https://github.com/APIs-guru/graphql-voyager
if (process.env.APP_ENV !== "production") {
  api.use("/graphql/model", (0, _middleware.express)({
    endpointUrl: "/graphql"
  }));
}
api.use("/graphql", (0, _expressGraphql.graphqlHTTP)(req => ({
  schema: _schema.default,
  context: new _context.Context(req, _configureSubscriptions.pubsub),
  graphiql: process.env.APP_ENV !== "production",
  pretty: process.APP_ENV !== "production",
  customFormatErrorFn: err => {
    console.error((err === null || err === void 0 ? void 0 : err.originalError) || err);
    return (0, _graphql.formatError)(err);
  }
})));