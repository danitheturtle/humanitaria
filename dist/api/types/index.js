"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
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
var _users = require("./users");
Object.keys(_users).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _users[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _users[key];
    }
  });
});
var _errors = require("./errors");
Object.keys(_errors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _errors[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _errors[key];
    }
  });
});
var _locations = require("./locations");
Object.keys(_locations).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _locations[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _locations[key];
    }
  });
});