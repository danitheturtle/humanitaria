import { Environment, Network, RecordSource, Store } from 'relay-runtime';

export const createRelayEnvironment = (config) => {
  const { records, baseUrl, /*request*/ } = config || {};
  const store = new Store(new RecordSource(records));
  const network = Network.create((operation, variables) => fetch(`${baseUrl || ""}/graphql`, {
    method: "POST",
    headers: {
      //Copy headers from original request
      // ...(config.request && Array.from(config.request.headers).reduce((acc, [k, v]) => ({ ...acc, [k]: v}), {})),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query: operation.text, variables }),
    credentials: 'same-origin'
  }).then(res => res.json()));
  return new Environment({
    store,
    network
  });
}