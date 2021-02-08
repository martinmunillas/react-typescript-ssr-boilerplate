import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { hydrate, render } from 'react-dom';
import { Router, BrowserRouter } from 'react-router-dom';
import { client } from './apolloClient';
import { createBrowserHistory } from 'history';

import App from './app';

declare global {
  interface Window {
    __APOLLO_STATE__: any;
  }
}

const history = createBrowserHistory();

const show = process.env.ENV === 'development' ? render : hydrate;

show(
  <ApolloProvider client={client}>
    <Router history={history}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
