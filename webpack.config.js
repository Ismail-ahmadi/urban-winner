const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const javascript = {
  test: /\.m?js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  },
};

const postcss = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    /* eslint-disable global-require */
    plugins: [
      require('postcss-size'),
      require('postcss-short-text'),
      require('postcss-flexbox'),
      require('autoprefixer')({ browsers: 'last 2 versions' }),
    ],
  },
};

const css = {
  test: /\.(sc|c)ss$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader', postcss, 'sass-loader'],
};

module.exports = {
  entry: './assets/javascripts/app.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'assets', 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(['./themes/default/source/dist']),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  module: {
    rules: [javascript, css],
  },
};
