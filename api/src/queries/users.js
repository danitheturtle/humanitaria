import { GraphQLNonNull, GraphQLInputObjectType, GraphQLID, GraphQLString } from 'graphql';
import { UserType } from '../types';
import { fromGlobalId } from '../graph/utils';

export const me = {
  type: UserType,
  resolve: async (_, args, ctx) => {
    ctx.ensureAuthorized();
    return ctx.user
  }
}

export const user = {
  type: UserType,
  args: {
    input: {
      type: new GraphQLInputObjectType({
        name: 'userInput',
        fields: {
          id: { type: GraphQLID },
          username: { type: GraphQLString },
          email: { type: GraphQLString },
          uid: { type: GraphQLID }
        }
      })
    }
  },
  resolve: async (_, args, ctx) => {
    if (args.input.id) {
      const userIndex = fromGlobalId(args.input.id, 'User');
      return await ctx.getUserById(userIndex);
    } else if (args.input.uid) {
      return await ctx.getUserByUID(args.input.uid);
    } else if (args.input.username) {
      return await ctx.getUserByUsername(args.input.username);
    } else if (args.input.email) {
      return await ctx.getUserByEmail(args.input.email);
    }
  }
}
