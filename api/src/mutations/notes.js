import { NoteType } from '../types';
import {
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLID
} from 'graphql';
import { mutationWithClientMutationId } from "graphql-relay";
const { datatype } = require("faker");
import db from '../db';

export const createNote = mutationWithClientMutationId({
  name: 'createNote',
  inputFields: {
    content: { type: GraphQLString }
  },
  outputFields: {
    note: {
      type: NoteType,
      resolve: async payload => await db.getNote(payload.id)
    }
  }
  mutateAndGetPayload: ({ content }/*, ctx, info*/) => {
    return await db.createNote({ content });
  }
});

export const DeleteNoteMutation = {
  type: GraphQLID,
  args: {
    id: { type: GraphQLID }
  },
  resolve: async (self, { id }) => {
    await db.table("notes").where("id", id).del();
    return _id;
  }
};

export const UpdateNoteMutation = {
  type: noteType,
  args: {
    _id: { type: GraphQLID },
    content: { type: GraphQLString }
  },
  resolve: async (_, { _id, content }) => {
    const noteService = new NoteService();
    const updatedNote = await noteService.updateNote(_id, { content });

    return updatedNote;
  }
};
