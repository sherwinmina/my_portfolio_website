var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(env){
  return {
    entry: {
    main: path.resolve(__dirname, '..', 'src', 'index' ),
    vendor: ['react', 'react-dom', 'react-router', 'lodash', 'semantic-ui-react', 'prop-types', 'react-materialize', 'jquery', 'materialize-css' ]
  },
  output: {
    path: path.join(__dirname, '..', 'build-dev'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['react', 'es2015', 'stage-1']
      }
     },
     {
      test: /\.html$/,
      use: [ {
        loader: 'html-loader',
        options: {
          collapseWhitespace: false
        }
      }],
      },
     {
      test: /\.css$/,
      include: [path.join(__dirname, '..' , 'src')
      ],
      loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
            })
    },
    {
      test: /\.scss$/,
      loader:  ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader!sass-loader"
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
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      chunks: ['vendor']
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'index.html'),
      hash: false,
      chunks: ['vendor',  'main']
    }),
    new cleanWebpackPlugin(['build-dev'], {
      root: path.resolve(__dirname),
      verbose: true
    }),
     new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env)
    }),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery'
    // }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname),
    hot: true,
    inline: true
  },
  devtool: 'eval-source-map'
  }
};
