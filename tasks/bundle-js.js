const { dest } = require("gulp");
const webpack = require("webpack");
const webpackConfig = require("./config/webpack.config");
const webpackStream = require("webpack-stream");

exports.bundleJs = bundleJs = () =>
  // webpackStreamの第2引数にwebpackを渡す
  webpackStream(webpackConfig, webpack).pipe(dest("./dist/js"));
