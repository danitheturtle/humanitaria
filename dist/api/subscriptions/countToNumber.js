"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countToNumber = void 0;
var _graphqlRelaySubscription = require("graphql-relay-subscription");
var _graphql = require("graphql");
const countToNumber = (0, _graphqlRelaySubscription.subscriptionWithClientId)({
  name: 'countToNumber',
  inputFields: {
    number: {
      type: _graphql.GraphQLInt
    }
  },
  outputFields: {
    number: {
      type: _graphql.GraphQLInt
    }
  },
  async *subscribe({
    number
  }) {
    for (let counter = 1; counter <= number; counter++) {
      yield {
        number: counter
      };
      await new Promise(res => setTimeout(res, 1000));
    }
  }
});
exports.countToNumber = countToNumber;