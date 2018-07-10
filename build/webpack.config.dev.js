'use strict';

const webpack           = require('webpack');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry    : [
    './src/app.js'
  ],
  devServer: {
    hot         : true,
    watchOptions: {
      poll: true
    }
  },
  module   : {
    rules: [
      {
        test: /\.vue$/,
        use : 'vue-loader'
      },
      {
        test: /\.css$/,
        use : [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.styl(us)?$/,
        use : [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.js$/,
        use : 'babel-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use : [
          {
            loader : 'file-loader',
            options: {
              name      : '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins  : [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
                            filename: 'index.html',
                            template: 'index.html',
                            inject  : true
                          })
  ]
};
