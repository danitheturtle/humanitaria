import { GraphQLID } from 'graphql';
import { fromGlobalId } from 'graphql-relay';
import { NoteType } from '../types';
import db from '../db';

export const notes = {
  type: GraphQLList(NoteType),
  args: {},
  resolve: async () => {
    const data = await db.getNotes();
    return data;    
  }
}

export const note = {
  type: NoteType,
  args: { id: { type: GraphQLID } },
  resolve: async (_, args) => {
    const noteId = fromGlobalId(args.id).id;
    return await db.getNote(noteId);
  }
}