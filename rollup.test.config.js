import babel from 'rollup-plugin-babel';

export default {
  entry: 'text/index.js',
  plugins: [babel()],
  format: 'cjs',
  dest: 'tmp/test-bundle.js',
};
