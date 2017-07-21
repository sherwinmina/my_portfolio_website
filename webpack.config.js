// var path = require('path');

// module.exports = function(env) {
//   const webpackConfigPath =
//     path.resolve(__dirname, 'config', `${env}.webpack.config.js`);
//   const webpackConfig = require(webpackConfigPath)(env);
//   return webpackConfig;
// }

// var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var webpack = require('webpack');
// var htmlWebpackPlugin = require('html-webpack-plugin');
// var cleanWebpackPlugin = require('clean-webpack-plugin');
// var optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');



var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.js'
    // vendor: ['react', 'react-dom', 'react-router', 'lodash', 'semantic-ui-react', 'prop-types']
  },
  output: {
    path: path.join(__dirname, 'build'),
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
      },
     },
     {
      test: /\.css$/,
      include: [path.join(__dirname, 'src')
      ],
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader',
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      chunks: ['vendor']
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
     hot: true
  },
  devtool: 'eval-source-map'
};

