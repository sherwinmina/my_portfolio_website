var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.jsx',
    vendor: ['react', 'react-dom', 'react-router', 'lodash', 'semantic-ui-react', 'prop-types']
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
      exclude: /node_modules/,
      loader: 'babel',
      query: {
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
    }
    ],
  },
  
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      chunks: ['vendor']
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
     hot: true
  },
  devtool: 'eval-source-map'
};
