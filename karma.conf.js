var path = require('path');
var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['phantomjs-shim', 'mocha', 'chai'],
    files: [
      'test/index.js'
    ],
    webpack: {
      devtool: 'eval',

      module: {
        preLoaders: [{
          test: /\.js$/,
          loader: 'babel-istanbul-loader',
          exclude: /(node_modules|test)/,
        }, {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /(node_modules|src)/,
        }],
      },
      resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
          'react-lib-starterkit': path.join(__dirname, 'dist', 'react-lib-starterkit')
        }
      },
    },

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/',
    },

    webpackServer: {
      noInfo: true,
    },

    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: false,
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],
    captureTimeout: 60000,
    singleRun: true,
  });
};
