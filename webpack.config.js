const { readFileSync } = require('fs');
const webpack = require('webpack');

const treeShakenMinifyer = new webpack.LoaderOptionsPlugin({
  minimize: true,
  debug: false
});

const extractSharedLibraries = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: 'vendor.js'
});

const babelSettings = JSON.parse(readFileSync('.babelrc'));

module.exports = {
  entry: {
    'index': [ './src/index.js' ]
  },
  plugins: [
    extractSharedLibraries,
    treeShakenMinifyer,
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    extensions: [ '.js', '.html' ]
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js',
    chunkFilename: '[name].[id].js'
  },
  module: {
    rules: [
      {
        test: /\.(html|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: babelSettings
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      }
    ]
  },
  devtool: 'inline-source-map'
};