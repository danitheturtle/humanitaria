"use strict";

var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _process = _interopRequireDefault(require("process"));
var _schema = require("./graph/schema");
var _router = require("./router");
var _configureSubscriptions = require("./graph/configureSubscriptions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
require('env');
const port = _process.default.env.SERVER_PORT || 4000;
const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_router.api);
app.get("/", (req, res) => {
  res.redirect("/graphql");
});
const server = app.listen(port, () => {
  (0, _configureSubscriptions.configureSubscriptions)(server);
  console.log(`[api] ${_process.default.env.SERVER_ORIGIN}:${port}/`);
  console.log({
    env: _process.default.env.APP_ENV,
    version: _process.default.env.VERSION,
    db: _process.default.env.PGDATABASE
  });
  (0, _schema.updateSchema)();
});