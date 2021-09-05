import { subscriptionWithClientId } from 'graphql-relay-subscription';
import { GraphQLID, GraphQLNonNull } from 'graphql';
import { QueryNotesEdge } from '../'

export const noteLiked = subscriptionWithClientId({
  name: 'noteLiked',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) }
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

export const noteCreated = subscriptionWithClientId({
  name: 'noteCreated',
  inputFields: {},
  outputFields: {
    noteEdge: {
      type: QueryNotesEdge,
      resolve: source => ({
        cursor: source.id,
        node: source
      })
    }
  }
});