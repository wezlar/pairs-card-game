const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: path.join(__dirname, 'client', 'pairs.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: [path.resolve(__dirname, 'client'), 'node_modules']
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'client')
  },
  module: {
    rules: [
      {
        // this is so that we can compile any React,
        // ES6 and above into normal ES5 syntax
        test: /\.(js|jsx)$/,
        // we do not want anything from node_modules to be compiled
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|styl)$/,
        include: path.join(__dirname, 'client'),
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'stylus-loader' // compiles Stylus to CSS
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|mp3)$/,
        use: [
          {
            loader: 'file-loader', 
          },
          {
            loader: 'raw-loader',
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, 'index.html')
    }),
    new BundleAnalyzerPlugin()
  ]
};
