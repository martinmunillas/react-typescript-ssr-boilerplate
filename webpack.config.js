const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: { app: './build/frontend/index.js' },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build/server/public/build'),
    filename: '[name]-[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new WebpackManifestPlugin(),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({}),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
  },
};
