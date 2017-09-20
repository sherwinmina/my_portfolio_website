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
    vendor: ['react', 'react-dom', 'react-router', 'semantic-ui-react', 'prop-types']
  },
  output: {
    path: path.join(__dirname, '..', 'build-prod'),
    publicPath: '/',
    filename: '[name].[hash].bundle.js'
  },
  module: {
    rules: [
      {
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
      presets: ['react', 'es2015', 'stage-1']
      },
     },
     {
      test: /\.html$/,
      use: [ {
        loader: 'html-loader',
        options: {
          minimize: true,
          removeComments: false,
          collapseWhitespace: false
        }
      }],
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
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
      use: 'url-loader?limit=100000'
    }
    ],
  },
  
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].bundle.js',
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
     new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env),
        'env': JSON.stringify(env)
    }),
    new optimizeCssAssetsWebpackPlugin({
      cssProcessorOptions: {discardComments: {removeAll: true}}
    })
    ,
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      mangle: false
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '..', 'build-prod'),
    hot: true,
    inline: true
  },
  devtool: 'source-map'
  }
};
