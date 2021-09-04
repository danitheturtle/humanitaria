import ConnectionHandler from 'relay-connection-handler-plus';
import { Environment, Network, RecordSource, Observable, Store } from 'relay-runtime';
import { createClient } from 'graphql-ws';

export const createRelayEnvironment = (config) => {
  const { records, baseUrl, wsUrl/*request*/ } = config || {};
  const store = new Store(new RecordSource(records));
  
  const subscriptionsClient = createClient({
    url: wsUrl,
    connectionParams: () => {
      //auth stuff. Might need to be seperate from jwt?
    }
  });
  
  const fetchQuery = (operation, variables) => {
    return fetch(`${baseUrl || ""}/graphql`, {
      method: "POST",
      headers: {
        //Copy headers from original request
        // ...(config.request && Array.from(config.request.headers).reduce((acc, [k, v]) => ({ ...acc, [k]: v}), {})),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query: operation.text, variables }),
      credentials: 'same-origin'
    }).then(res => res.json());
  }
  const subscriptionQuery = (operation, variables) => {
    return Observable.create(sink => {
      if (!operation.text) {
        return sink.error(new Error('Operation cannot be empty'));
      }
      return subscriptionsClient.subscribe({operationName: operation.name, query: operation.text, variables},{
        ...sink,
        error: (err) => {
          console.error(err);
        }
      })
    })
  }
  
  const network = Network.create(fetchQuery, subscriptionQuery);
  
  const handlerProvider = handle => {
    switch(handle) {
      case 'connection':
        return ConnectionHandler;
      default:
        throw new Error('no handler configured');
    }
  }
  return new Environment({
    handlerProvider,
    store,
    network
  });
}