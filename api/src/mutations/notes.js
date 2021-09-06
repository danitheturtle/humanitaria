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
    }
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
    note: { type: NoteType }
  },
  mutateAndGetPayload: async ({ id }, ctx) => {
    const deletedNote = await db.deleteNote(fromGlobalId(id, "Note"));
    ctx.publish('noteDeleted', { note: deletedNote });
    return { note: deletedNote };
  }
});

export const updateNote = mutationWithClientMutationId({
  name: 'updateNote',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    content: { type: new GraphQLNonNull(GraphQLString) }
  },
  outputFields: {
    note: { type: NoteType }
  },
  mutateAndGetPayload: async ({ id, content }, ctx) => {
    const updatedNote = await db.updateNote({ id: fromGlobalId(id, "Note"), content });
    ctx.publish('noteUpdated', { note: updatedNote });
    return { note: updatedNote };
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
