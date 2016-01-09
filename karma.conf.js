module.exports = function karmaConfig(config) {
  config.set({
    preprocessors: {
      'test/index.js': ['rollup'],
    },
    rollupPreprocessor: {
      rollup: {
        plugins: [
          require('rollup-plugin-babel')(),
        ],
      },
      bundle: {
        sourceMap: 'inline',
      },
    },
  });
};
