import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { NotesQuery } from './query/NotesQuery';
import { printSchema } from 'graphql';
import fs from 'fs';
import {
  CreateNoteMutation,
  UpdateNoteMutation,
  DeleteNoteMutation
} from './mutation/NotesMutation';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    notes: NotesQuery
  })
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createNote: CreateNoteMutation,
    deleteNote: DeleteNoteMutation,
    updateNote: UpdateNoteMutation
  })
});

const schema = new GraphQLSchema({ query: QueryType, mutation: MutationType });

export const updateSchema = () => {
  fs.writeFile('../../schema.graphql', printSchema(schema), function(err) {
    if (err) {
      return console.log(err);
    }
  });
};

export default schema;