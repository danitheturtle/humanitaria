"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodesField = exports.nodeInterface = exports.nodeField = void 0;
var _graphqlRelay = require("graphql-relay");
var _utils = require("./utils");
var _db = _interopRequireDefault(require("../db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  nodeInterface,
  nodeField,
  nodesField
} = (0, _graphqlRelay.nodeDefinitions)(globalId => {
  const {
    type,
    id
  } = (0, _graphqlRelay.fromGlobalId)(globalId);
  if (type === 'User') return _db.default.getUser(id).then((0, _utils.assignNodeType)("User"));
  if (type === 'Note') return _db.default.getNote(id).then((0, _utils.assignNodeType)("Note"));
  if (type === 'Location') return _db.default.getLocation(id).then((0, _utils.assignNodeType)("Location"));
  return null;
}, obj => {
  switch ((0, _utils.getNodeType)(obj)) {
    case "Note":
      return require("./types").NoteType;
    case "User":
      return require('./types').UserType;
    case "Location":
      return require('./types').LocationType;
    default:
      return null;
  }
});
exports.nodesField = nodesField;
exports.nodeField = nodeField;
exports.nodeInterface = nodeInterface;