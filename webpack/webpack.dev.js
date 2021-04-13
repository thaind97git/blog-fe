process.env.NODE_ENV = 'development';

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const openBrowser = require('react-dev-utils/openBrowser');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin;
const paths = require('../config/paths');

const REACT_APP_PORT = process.env.REACT_APP_PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

const { appPublic, appHtml, appBuild } = paths;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: appPublic,
    host,
    hot: true,
    port: REACT_APP_PORT,
    historyApiFallback: true,
    stats: {
      colors: true,
      hash: false,
      version: true,
      timings: true,
      assets: false,
      chunks: false,
      modules: false,
      publicPath: false,
    },
    after: () => {
      openBrowser && openBrowser(`http://127.0.0.1:${REACT_APP_PORT}/`);
    },
    onListening: function (server) {
      const port = server.listeningApp.address().port;
      console.log('Listening on port:', port);
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: appHtml,
    }),
    // new BundleAnalyzerPlugin({ analyzerPort: REACT_APP_PORT })
  ],
  output: {
    path: appBuild,
    // There will be one main bundle, and one file per asynchronous chunk.
    // In development, it does not produce real files.
    filename: 'static/js/bundle.js',
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
  },
});
