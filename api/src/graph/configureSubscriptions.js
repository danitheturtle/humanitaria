import ws from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import schema from './schema';

export const configureSubscriptions = (server) => {
  const wsServer = new ws.Server({
    server,
    path: '/graphql'
  });
  useServer({schema}, wsServer);
}