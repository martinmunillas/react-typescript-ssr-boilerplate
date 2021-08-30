import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";

const { API_URL } = process.env;

export const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  link: new HttpLink({ fetch, uri: API_URL, credentials: "include" }),
});
