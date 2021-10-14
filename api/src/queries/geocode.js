import { GraphQLInputObjectType, GraphQLString } from 'graphql';
import { LocationType } from '../types';
import db from '../db';

export const geocode = {
  type: LocationType,
  args: {
    input: {
      type: new GraphQLInputObjectType({
        name: 'geocodeInput',
        fields: {
          search: { type: GraphQLString }
        }
      })
    }
  },
  resolve: async (_, args, ctx) => {
    const query = args.input.search;
    return await db.searchLocation(query);
  }
}