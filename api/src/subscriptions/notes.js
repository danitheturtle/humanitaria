import { subscriptionWithClientId } from 'graphql-relay-subscription';
import { NoteType, QueryNotesEdge } from '../types';

export const noteUpdated = subscriptionWithClientId({
  name: 'noteUpdated',
  inputFields: {},
  outputFields: {
    note: { type: NoteType }
  },
  subscribe: (_, ctx) => ctx.subscribe('noteUpdated')
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
  },
  subscribe: (_, ctx) => ctx.subscribe('noteCreated')
});

export const noteDeleted = subscriptionWithClientId({
  name: 'noteDeleted',
  inputFields: {},
  outputFields: {
    note: { type: NoteType }
  },
  subscribe: (_, ctx) => ctx.subscribe('noteDeleted')
});