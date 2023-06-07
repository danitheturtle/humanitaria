"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _countToNumber = require("./countToNumber");
Object.keys(_countToNumber).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _countToNumber[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _countToNumber[key];
    }
  });
});
var _notes = require("./notes");
Object.keys(_notes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _notes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _notes[key];
    }
  });
});