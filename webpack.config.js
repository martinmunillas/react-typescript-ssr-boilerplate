const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { readdirSync } = require('fs');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

require('dotenv').config();

const { ENV } = process.env

const isDev = ENV === 'development'

module.exports = {
  entry: [isDev && 'webpack-hot-middleware/client?path=/__webpack_hmr?reload=true', './build/frontend'],
  mode: ENV,
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'build/server/public/build'),
    filename: isDev ? 'app.js' : 'app-[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    hot: true,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin(process.env),
    !isDev && new WebpackManifestPlugin(),
    !isDev && new CleanWebpackPlugin(),
    isDev && new webpack.HotModuleReplacementPlugin(),
    isDev && new ReactRefreshWebpackPlugin({
      overlay: {
        sockIntegration: 'whm'
      }
    }),
  ].filter(Boolean),
  optimization: !isDev ? {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
  } : { minimize: false },
};