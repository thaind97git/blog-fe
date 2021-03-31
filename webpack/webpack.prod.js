process.env.NODE_ENV = 'production';
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('./config/paths');
const { appBuild, appPublic, publicUrlOrPath, appHtml } = paths;

// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
console.log({ publicUrlOrPath });
module.exports = merge(common, {
  mode: 'production',
  devtool: shouldUseSourceMap ? 'source-map' : false,
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(appPublic, 'favicon.ico'),
          to: path.resolve(appBuild, 'favicon.ico'),
          toType: 'file',
        },
      ],
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
    new HtmlWebpackPlugin({
      template: appHtml,
      filename: 'index.html',
    }),
  ],
  output: {
    publicPath: publicUrlOrPath,
    // There will be one main bundle, and one file per asynchronous chunk.
    // In development, it does not produce real files.
    filename: 'static/js/[name].[contenthash:8].js',
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
