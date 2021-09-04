import { subscriptionWithClientId } from 'graphql-relay-subscription';
import { GraphQLInt } from 'graphql';

export const countToNumber = subscriptionWithClientId({
  name: 'countToNumber',
  inputFields: {
    number: { type: GraphQLInt }
  },
  outputFields: {
    number: { type: GraphQLInt }
  },
  async *subscribe({ number }) {
    for (let counter=1; counter <= number; counter++) {
      yield { number: counter };
      await new Promise(res => setTimeout(res, 1000));
    }
  }
});