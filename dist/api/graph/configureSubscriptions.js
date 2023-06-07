"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pubsub = exports.configureSubscriptions = void 0;
var _ws = _interopRequireDefault(require("ws"));
var _ws2 = require("graphql-ws/lib/use/ws");
var _graphqlSubscriptions = require("graphql-subscriptions");
var _schema = _interopRequireDefault(require("./schema"));
var _subscriptionContext = require("../context/subscriptionContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
require('events').EventEmitter.defaultMaxListeners = 128;
const pubsub = new _graphqlSubscriptions.PubSub();
exports.pubsub = pubsub;
const configureSubscriptions = server => {
  const wsServer = new _ws.default.Server({
    server,
    path: '/graphql'
  });
  (0, _ws2.useServer)({
    context: async (ctx, msg, args) => {
      return await new _subscriptionContext.SubscriptionContext(ctx, msg, args, pubsub).getSession();
    },
    schema: _schema.default
  }, wsServer);
};
exports.configureSubscriptions = configureSubscriptions;