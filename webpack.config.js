const webpack = require('webpack')
const path = require('path')
const develop = process.env.NODE_ENV !== 'production'

module.exports = {
  context: path.resolve(__dirname, './src'),

  entry: {
    app: './app.js'
  },

  output: {
    path: path.resolve(__dirname, './src'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  devtool: develop ? 'cheap-module-source-map' : false,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&[hash:base64:5]',
          'postcss-loader'
        ]
      }
    ]
  }
}
