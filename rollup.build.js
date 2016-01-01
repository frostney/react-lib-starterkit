// As much as I want this to be ES2015,
// I don't want to necesserily depend on `babel-node` and a second preset
// This is why we are also disabling linting for this file

/*eslint-disable */

var rollup = require('rollup');
var babel = require('rollup-plugin-babel');

var pkg = require('./package.json');
var name = pkg.name;
var moduleName = 'ReactLibStarterkit';

var formats = ['es6', 'cjs', 'umd'];

var baseConfig = {
  entry: 'src/index.js',
  plugins: [babel()],
};

var builds = formats.map(function(format) {
  var config = Object.assign({}, baseConfig);

  config.format = format;
  config.dest = 'dist/' + name;

  if (format === 'es6') {
    config.dest += '.es2015';
  }

  if (format === 'umd') {
    config.dest += '.umd';
    config.moduleName = moduleName;
  }

  config.dest += '.js';

  return rollup.rollup(config).then(function(bundle) {
    bundle.write(config);
  });
});

Promise.all(builds).then(function() {
  console.log('All done!');
}).catch(function(err) {
  console.log('Error while generating a build:');
  console.log(err);
});

/*eslint-enable */
