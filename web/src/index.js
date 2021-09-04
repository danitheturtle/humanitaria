// import env from 'webpack' /* note: this is done automatically at compile time */
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { createRelayEnvironment } from './relay';
import App from './App';

const relayEnvironment = createRelayEnvironment({
  baseUrl: "",
  wsUrl: env.SOCKET_ORIGIN
});
const history = createBrowserHistory();

ReactDOM.render(
  <App relayEnvironment={relayEnvironment} history={history} />, 
  document.getElementById('capitalism-bad')
);