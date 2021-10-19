import { GraphQLInputObjectType, GraphQLString, GraphQLID } from 'graphql';
import { forwardConnectionArgs } from 'graphql-relay';
import { fromGlobalId } from '../graph/utils';
import { LocationType, QuerySearchLocationsConnection, QuerySearchLocationsEdge } from '../types';
import db from '../db';

export const searchLocations = {
  type: QuerySearchLocationsConnection,
  args: {
    ...forwardConnectionArgs,
    search: { type: GraphQLString }
  },
  resolve: async (_, args, ctx) => {
    const query = args.search;
    const dbResult = await db.getSearchLocationsConnection(args.after, args.first, query);
    return {
      pageInfo: {
        hasNextPage: dbResult.hasNextPage,
        endCursor: dbResult.endCursor
      },
      edges: dbResult.data.map(loc => ({
        cursor: loc.placeId,
        node: loc
      }))
    };
  }
}

export const location = {
  type: LocationType,
  args: {
    input: {
      type: new GraphQLInputObjectType({
        name: 'locationInput',
        fields: {
          id: { type: GraphQLID }
        }
      })
    }
  },
  resolve: async (_, args) => {
    const id = fromGlobalId(args.input.id, 'Location');
    return await db.getLocation(id);
  }
}
