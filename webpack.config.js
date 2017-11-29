const { readFileSync } = require("fs");
const webpack = require("webpack");
const path = require("path");
const styleLintPlugin = require("stylelint-webpack-plugin");

const treeShakenMinifyer = new webpack.LoaderOptionsPlugin({
  minimize: true,
  debug: false
});

const extractSharedLibraries = new webpack.optimize.CommonsChunkPlugin({
  name: "vendor",
  filename: "vendor.js"
});

const babelSettings = JSON.parse(readFileSync(".babelrc"));

module.exports = {
  entry: {
    "index": [ "./src/index.js" ]
  },
  devtool: "cheap-eval-source-map",
  output: {
    path: __dirname + "/public",
    filename: "[name].js",
    chunkFilename: "[name].[id].js"
  },
  plugins: [
    extractSharedLibraries,
    treeShakenMinifyer,
    new webpack.NamedModulesPlugin(),
    new styleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.html',
      failOnError: false,
      quiet: false
    })
  ],
  resolve: {
    extensions: [ ".js", ".html" ]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(html|js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(html|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: babelSettings
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: "svelte-loader"
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};
