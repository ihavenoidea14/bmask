import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: './index.js',
  format: 'cjs',
  plugins: [commonjs(), resolve()],
  dest: './dist/bundle.js'
};