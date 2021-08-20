import React from 'react';
import ReactDOM from 'react-dom';
//import { createBrowserHistory } from 'history';
//import history from "history/browser";
import App from './App';
import { createRelayEnvironment } from './relay';

const relayEnvironment = createRelayEnvironment({
  baseUrl: "http://localhost:4000"
});

const history = {}//createBrowserHistory();

ReactDOM.render(
  <App relayEnvironment={relayEnvironment} history={history} />, 
  document.getElementById('capitalism-bad')
);