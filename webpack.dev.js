const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-Plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { loadavg } = require('os');

const dotenv = require('dotenv').config({ path: '.env.LOCAL' });
const env = dotenv.parsed;

module.exports = {
  mode: 'development',

  entry: './src/index.ts',

  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: env.BASE_URL_NAME,
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules|.spec|.test/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(svg|png|gif|jpeg)$/,
        use: 'file-loader',
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlPlugin({
      template: path.resolve(__dirname, 'index.template.html'),
    }),
    new CopyWebpackPlugin({ patterns: [{ from: path.resolve(__dirname, 'public'), to: 'public' }] }),
  ],

  devtool: 'inline-source-map',

  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
};
