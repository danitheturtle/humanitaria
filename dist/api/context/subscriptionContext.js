"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubscriptionContext = void 0;
var _index = require("./index");
var _session = _interopRequireDefault(require("../session"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class SubscriptionContext extends _index.Context {
  constructor(ctx, msg, args, pubsubProvider) {
    var _ctx$extra;
    super(ctx === null || ctx === void 0 ? void 0 : (_ctx$extra = ctx.extra) === null || _ctx$extra === void 0 ? void 0 : _ctx$extra.request, pubsubProvider);
    this.socketContext = ctx;
  }
  async getSession() {
    await (0, _session.default)(this.req, null, () => {});
    return this;
  }
}
exports.SubscriptionContext = SubscriptionContext;