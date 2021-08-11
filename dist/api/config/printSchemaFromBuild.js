"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const printSchemaFromBuild = schema => {
  _fs.default.writeFile('../../schema.graphql', (0, _graphql.printSchema)(schema), function (err) {
    if (err) {
      return console.log(err);
    }

    console.log('Schema generated');
  });
};

var _default = printSchemaFromBuild;
exports.default = _default;