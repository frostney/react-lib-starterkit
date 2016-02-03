var path = require('path');
var fs = require('fs');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'test/index.js'
    ],
    preprocessors: {
      'test/index.js': ['rollup'],
    },
    rollupPreprocessor: {
      rollup: {
        plugins: [
          require('rollup-plugin-babel')(),
          require('rollup-plugin-npm')()
        ]
      },
      bundle: {
        sourceMap: 'inline'
      }
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
    reporters: ['progress'],
    captureTimeout: 60000,
    singleRun: true,
  });
};
