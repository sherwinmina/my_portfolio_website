var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');
var optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function(env) {
  return {
    entry: {
    main: path.resolve(__dirname, '..', 'src', 'index' ),
    vendor: ['react', 'react-dom', 'react-router', 'lodash', 'semantic-ui-react', 'prop-types']
  },
  output: {
    path: path.join(__dirname, '..', 'build-prod'),
    publicPath: '/',
    filename: '[name].[chunkhash].bundle.js'
  },
  module: {
    rules: [
      {
      exclude: /node_modules/,
      loader: 'babel',
      query: {
      presets: ['react', 'es2015', 'stage-1']
      },
     },
     {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader?sourceMap!sass-loader?sourceMap"
          })
    }
    ],
  },
  
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[chunkhash].bundle.js',
      chunks: ['vendor']
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'index.html'),
      hash: true,
      chunks: ['vendor',  'main'],
      minify: {
        collapseWhiteSpace: true
      }
    }),
    new cleanWebpackPlugin(['build-prod'], {
      root: path.resolve(__dirname),
      verbose: true
    }),
    new optimizeCssAssetsWebpackPlugin({
      cssProcessorOptions: {discardComments: {removeAll: true}}
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comment: false
      },
      mangle: false
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '..', 'build-prod'),
    hot: true,
    inline: true
  },
  devtool: 'eval-source-map'
  }
};
