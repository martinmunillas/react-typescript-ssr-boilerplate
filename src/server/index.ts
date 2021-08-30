import path from "path";

import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import renderApp from "./middlewares/renderApp";
import config from "../../webpack.config.js";

const app = express();
const { PORT, ENV } = process.env;

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./public")));
dotenv.config();

const isDev = ENV === "development";
app.use(express.static(path.join(__dirname, "public")));

if (isDev) {
  const compiler = webpack(config);
  app.use(
    //@ts-ignore
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
      serverSideRender: true,
    })
  );
  app.use(webpackHotMiddleware(compiler));
}

app.get("*", renderApp());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
