var path = require('path');

module.exports = function(env) {
  const webpackConfigPath =
    path.resolve(__dirname, 'config', `${env}.webpack.config.js`);
  const webpackConfig = require(webpackConfigPath)(env);
  return webpackConfig;
}

// var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var webpack = require('webpack');
// var htmlWebpackPlugin = require('html-webpack-plugin');
// var cleanWebpackPlugin = require('clean-webpack-plugin');
// var optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// module.exports = {
//   entry: {
//     main: './src/index.js',
//     vendor: ['react', 'react-dom', 'react-router', 'lodash', 'semantic-ui-react', 'prop-types']
//   },
//   output: {
//     path: path.join(__dirname, 'build'),
//     publicPath: '/',
//     filename: '[name].[chunkhash].bundle.js'
//   },
//   module: {
//     rules: [
//       {
//       exclude: /node_modules/,
//       loader: 'babel-loader',
//       options: {
//         presets: ['react', 'es2015', 'stage-1']
//       },
//      },
//      {
//       test: /\.html$/,
//       use: [ {
//         loader: 'html-loader',
//         options: {
//           minimize: true,
//           removeComments: false,
//           collapseWhitespace: false
//         }
//       }],
//       },
//      {
//       test: /\.css$/,
//       include: [path.join(__dirname, 'src')
//       ],
//       loader: 'style-loader!css-loader'
//     },
//     {
//       test: /\.scss$/,
//       loader:  ExtractTextPlugin.extract({
//             fallback: "style-loader",
//             use: "css-loader!sass-loader"
//       })
//     },
//     {
//       test: /\.(png|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
//       use: 'url-loader?limit=100000'
//     }
//     ],
//   },
  
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },
//   plugins: [
//     new ExtractTextPlugin('main.css'),
//     new webpack.optimize.CommonsChunkPlugin({
//       name: 'vendor',
//       filename: 'vendor.[chunkhash].bundle.js',
//       chunks: ['vendor']
//     }),
//      new htmlWebpackPlugin({
//       template:  'index.html',
//       hash: true,
//       chunks: ['vendor',  'main']
//     }),
//      new cleanWebpackPlugin(['build-dev'], {
//       root: path.resolve(__dirname),
//       verbose: true
//     })
//   ],
//   devServer: {
//     historyApiFallback: true,
//     contentBase: './',
//      hot: true
//   },
//   devtool: 'eval-source-map'
// };

