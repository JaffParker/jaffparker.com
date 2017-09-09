const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

process.env.NODE_ENV = 'development'

module.exports = {
  entry: ['babel-polyfill', 'whatwg-fetch', `${__dirname}/src/index.js`],
  output: {
    path: `${__dirname}/public`,
    filename: 'app.js',
    publicPath: `/`
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract('css-loader!resolve-url-loader!sass-loader')
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(ttf|eot|ico|json|svg)/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            useRelativePath: true
          }
        }]
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      inject: 'body'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ]),
    new ExtractTextPlugin('dist/styles/main.css', {
      allChunks: true
    })
  ]
}
