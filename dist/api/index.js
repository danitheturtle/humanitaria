"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _expressGraphql = require("express-graphql");

var _databaseConnection = require("./config/databaseConnection");

var _schema = _interopRequireDefault(require("./graphql/schema"));

var _printSchemaFromBuild = _interopRequireDefault(require("./config/printSchemaFromBuild"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
(0, _databaseConnection.setupDB)(v => console.log(v));
app.use((0, _cors.default)());
app.use('/graphql', (0, _expressGraphql.graphqlHTTP)({
  schema: _schema.default,
  graphiql: true,
  pretty: true
}));
(0, _printSchemaFromBuild.default)(_schema.default);
app.listen(4000, () => console.log('SERVER OK'));