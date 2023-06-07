"use strict";

require("core-js/modules/esnext.weak-map.delete-all.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSchema = exports.default = void 0;
var _graphql = require("graphql");
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _nodeDefinitions = require("./nodeDefinitions");
var mutations = _interopRequireWildcard(require("../mutations"));
var queries = _interopRequireWildcard(require("../queries"));
var subscriptions = _interopRequireWildcard(require("../subscriptions"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const RootQueryType = new _graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: _nodeDefinitions.nodeField,
    nodes: _nodeDefinitions.nodesField,
    ...queries
  })
});
const RootMutationType = new _graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: mutations
});
const RootSubscriptionType = new _graphql.GraphQLObjectType({
  name: 'Subscription',
  fields: subscriptions
});
const schema = new _graphql.GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
  subscription: RootSubscriptionType
});
const updateSchema = () => {
  _fs.default.writeFile(_path.default.resolve(__dirname, '..', '..', './schema.graphql'), (0, _graphql.printSchema)(schema), function (err) {
    if (err) {
      return console.log(err);
    }
  });
};
exports.updateSchema = updateSchema;
var _default = schema;
exports.default = _default;