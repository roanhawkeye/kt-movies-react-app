const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const envAlias = process.env.ENV || 'PROD';

const { parsed: env } = require('dotenv').config({ path: `.env.${envAlias}` });

module.exports = {
  mode: 'production',

  entry: './src/index.ts',

  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, `builds/${envAlias}`),
    publicPath: env.BASE_URL_NAME,
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlPlugin({
      template: path.resolve(__dirname, 'index.template.html'),
    }),
  ],
};
