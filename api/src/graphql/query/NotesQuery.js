import { noteType } from '../nodeTypes';
import { GraphQLList } from 'graphql';
import NoteService from '../../services/NoteService';

export const NotesQuery = {
  type: GraphQLList(noteType),
  args: {},
  resolve: async () => {
    const noteService = new NoteService();
    const notes = await noteService.getAllNotes();

    return notes;
  }
};