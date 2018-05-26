const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const history = require('connect-history-api-fallback')
const convert = require('koa-connect')
const webpack = require('webpack')

const environment = process.env.NODE_ENV || 'development'

module.exports = {
  mode: environment,
  entry: [
    'babel-polyfill',
    'bootstrap',
    // 'bootstrap/scss/bootstrap.scss',
    `${__dirname}/src/index.jsx`,
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'app-[hash].js',
    publicPath: '/',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?(\.flow)?/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader'],
      },
      {
        test: /\.scss$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader', 'sass-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        }, 'resolve-url-loader', 'sass-loader'],
      },
      {
        test: /.(jpg|png)/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]?[hash]',
            emitFile: false,
          },
        },
      },
      {
        test: /\.(ico|svg|ttf|eot|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]_[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      inject: 'body',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
}

if ('development' === environment)
  module.exports.serve = {
    contentBase: `${__dirname}/dist`,
    compress: true,
    historyApiFallback: true,
    add: app => {
      app.use(convert(history()))
    },
  }
