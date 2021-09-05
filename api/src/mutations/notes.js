import { NoteType, QueryNotesEdge } from '../types';
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
      type: QueryNotesEdge,
      resolve: source => ({
        cursor: source.id,
        node: source
      })
    },
    empty: { type: GraphQLString, resolve: source => "" }
  },
  mutateAndGetPayload: async ({ content }, ctx/*, info*/) => {
    const createdNote = await db.createNote({ content, uid: ctx.user.uid });
    ctx.publish('noteCreated', createdNote);
    return createdNote;
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
  mutateAndGetPayload: async ({ id, content }, ctx) => {
    const updatedNote = await db.updateNote({ id: fromGlobalId(id, "Note"), content });
    ctx.publish('noteUpdated', { note: updatedNote });
    return updatedNote;
  }
});

export const likeNote = mutationWithClientMutationId({
  name: 'likeNote',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  outputFields: {
    note: { type: NoteType }
  },
  mutateAndGetPayload: async ({ id }, ctx) => {
    const likedNote = await db.getNote(fromGlobalId(id, "Note"));
    const updatedNote = await db.updateNote({ id: fromGlobalId(id, "Note"), likes: likedNote.likes + 1 });
    ctx.publish('noteUpdated', { note: updatedNote })
    return { note: updatedNote };
  }
})
