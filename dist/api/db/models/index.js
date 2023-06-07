"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _osmToLocationType = require("./osmToLocationType");
Object.keys(_osmToLocationType).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _osmToLocationType[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _osmToLocationType[key];
    }
  });
});