import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { API_URL } from '../shared/utils/consts';
import fetch from 'cross-fetch';

export const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  link: new HttpLink({ fetch, uri: API_URL, credentials: 'include' }),
});
