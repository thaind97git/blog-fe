const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const paths = require('./config/paths');
const getClientEnvironment = require('./config/env');
const common = require('./config/common');
const { appIndexJs, esLintFile, appBuild, publicUrlOrPath } = paths;
const { getStyleLoaders } = common;

// We will provide `paths.publicUrlOrPath` to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_URL%/xyz looks better than %PUBLIC_URL%xyz.
// Get environment variables to inject into our app.
const env = getClientEnvironment(publicUrlOrPath);

// style files regexes
const cssRegex = /\.css$/;
const sassRegex = /\.(scss|sass)$/;

module.exports = {
  entry: appIndexJs,
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|js)/,
        enforce: 'pre',
        loader: 'import-glob',
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: esLintFile,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['lodash'],
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
      },
      {
        test: cssRegex,
        use: getStyleLoaders(),
      },
      {
        test: sassRegex,
        use: getStyleLoaders({}, 'sass-loader'),
      },
      {
        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ['file-loader?name=[name].[ext]'],
      },
    ],
  },
  resolve: {
    alias: {
      _static: path.resolve(__dirname, '../public/static'),
      '@': path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    // Makes some environment variables available in index.html.
    // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
    // <link rel="icon" href="%PUBLIC_URL%/favicon.ico">
    // It will be an empty string unless you specify "homepage"
    // in `package.json`, in which case it will be the pathname of that URL.
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'production') { ... }. See `./env.js`.
    // It is absolutely essential that NODE_ENV is set to production
    // during a production build.
    // Otherwise React will be compiled in the very slow development mode.
    new webpack.DefinePlugin(env.stringified),
    new WebpackManifestPlugin(),
    new LodashModuleReplacementPlugin(),
    // new webpack.optimize.UglifyJsPlugin({}),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  output: {
    // The build folder.
    path: appBuild,
    // this defaults to 'window', but by setting it to 'this' then
    // module chunks which are built will work in web workers as well.
    globalObject: 'this',
  },
};
