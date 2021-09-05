require('events').EventEmitter.defaultMaxListeners = 128;
import ws from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { PubSub } from 'graphql-subscriptions';
import schema from './schema';
import { SubscriptionContext } from '../context/subscriptionContext';

export const pubsub = new PubSub();

export const configureSubscriptions = (server) => {
  const wsServer = new ws.Server({
    server,
    path: '/graphql'
  });
  useServer({
    context: async (ctx, msg, args) => {
      return await new SubscriptionContext(ctx, msg, args, pubsub).getSession();
    },
    schema
  }, wsServer);
}
