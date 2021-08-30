import { GraphQLNonNull, GraphQLInputObjectType, GraphQLID, GraphQLString } from 'graphql';
import { UserType } from '../types';

export const me = {
  type: UserType,
  resolve: async (_, args, ctx) => {
    return ctx.user
  }
}

export const user = {
  type: UserType,
  args: {
    input: {
      type: new GraphQLInputObjectType({
        name: 'UserInput',
        fields: {
          username: { type: GraphQLString },
          email: { type: GraphQLString },
          id: { type: GraphQLID }
        }
      })
    }
  },
  resolve: async (_, args, ctx) => {
    if (args.input.id) {
      return ctx.getUserById(args.input.id);
    } else if (args.input.username) {
      return ctx.getUserByUsername(args.input.username);
    } else if (args.input.email) {
      return ctx.getUserByEmail(args.input.email);
    }
  }
}
