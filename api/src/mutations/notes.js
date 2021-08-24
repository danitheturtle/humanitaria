import { NoteType, NoteEdge } from '../types';
import {
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';
import { mutationWithClientMutationId } from "graphql-relay";
import { fromGlobalId } from '../graph/utils';
import db from '../db';

export const createNote = mutationWithClientMutationId({
  name: 'createNote',
  inputFields: {
    content: { type: new GraphQLNonNull(GraphQLString) }
  },
  outputFields: {
    noteEdge: {
      type: NoteEdge,
      resolve: payload => ({
        cursor: payload.id,
        node: payload
      })
    }
  },
  mutateAndGetPayload: ({ content }/*, ctx, info*/) => {
    return db.createNote({ content });
  }
});

export const deleteNote = mutationWithClientMutationId({
  name: 'deleteNote',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  outputFields: {
    note: {
      type: NoteType,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: ({ id }) => {
    return db.deleteNote(fromGlobalId(id, "Note"))
  }
});

export const updateNote = mutationWithClientMutationId({
  name: 'updateNote',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    content: { type: new GraphQLNonNull(GraphQLString) }
  },
  outputFields: {
    note: {
      type: NoteType,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: ({ id, content }) => {
    return db.updateNote({ id: fromGlobalId(id, "Note"), content });
  }
});
