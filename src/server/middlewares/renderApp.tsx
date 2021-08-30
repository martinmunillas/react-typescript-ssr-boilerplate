import type { RequestHandler } from "express";
import React from "react";
import { StaticRouter } from "react-router-dom";
import { StyleSheetManager, ServerStyleSheet } from "styled-components";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { renderToStringWithData } from "@apollo/client/react/ssr";
import fetch from "cross-fetch";

import getManifest from "./getManifest";
import App from "../../frontend/app";
import dotenv from "dotenv";
import { isDev } from "../../shared/utils/consts";

dotenv.config();

const { API_URL } = process.env;

const setResponse = (
  html: string,
  apolloState: any,
  js: string,
  styles: string
) => {
  return `<!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>myAdmin</title>
              ${styles}
          </head>
          <body>
              <div id="root">${html}</div>
              <script>
                window.__APOLLO_STATE__ = ${JSON.stringify(apolloState).replace(
                  /</g,
                  "\\u003c"
                )};
              </script>
              <script src="${js}"></script>
          </body>
          </html>`;
};

const renderApp = (): RequestHandler => {
  return async (req, res) => {
    const js = !isDev ? `/build${getManifest("app.js")}` : "/app.js";

    const sheet = new ServerStyleSheet();

    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        fetch,
        uri: API_URL,
        credentials: "include",
        headers: {
          cookie: req.header("Cookie"),
        },
      }),
      ssrMode: true,
    });

    const html = await renderToStringWithData(
      <ApolloProvider client={client}>
        <StyleSheetManager sheet={sheet.instance}>
          <StaticRouter location={req.url} context={{}}>
            <App />
          </StaticRouter>
        </StyleSheetManager>
      </ApolloProvider>
    );

    const styles = sheet.getStyleTags();
    sheet.seal();

    const apolloState = client.extract();

    res.send(setResponse(html, apolloState, js, styles));
  };
};

export default renderApp;
