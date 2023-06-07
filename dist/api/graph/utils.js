"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assignNodeType = void 0;
exports.fromGlobalId = fromGlobalId;
exports.getNodeType = void 0;
var _graphqlRelay = require("graphql-relay");
function fromGlobalId(globalId, expectedType) {
  const {
    id,
    type
  } = (0, _graphqlRelay.fromGlobalId)(globalId);
  if (expectedType && type !== expectedType) {
    throw new Error(`Expected an ID of type '${expectedType}' but got '${type}'.`);
  }
  return id;
}
const assignNodeType = type => obj => {
  if (obj) {
    Object.defineProperty(obj, "nodeType", {
      configurable: false,
      enumerable: false,
      value: type
    });
  }
  return obj;
};
exports.assignNodeType = assignNodeType;
const getNodeType = obj => obj ? obj.nodeType : undefined;
exports.getNodeType = getNodeType;