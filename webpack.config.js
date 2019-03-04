const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  target: 'web',
  output: {
    library: 'vuexOrmAxios',
    libraryTarget: 'var',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  externals: {
    axios: 'axios'
  },
  optimization: {
    minimize: false
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  ie: 11,
                },
                // useBuiltIns: 'usage',
                useBuiltIns: false,
                modules: false,
                debug: true,
              }],
            ],
            plugins: ['@babel/plugin-transform-runtime']
          },
        },
      },
    ],
  },
};
