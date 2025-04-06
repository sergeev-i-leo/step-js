import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';
import buble from '@rollup/plugin-buble';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: {
    dir: "dist",
    format: "cjs",
    exports: "named",
    preserveModules: false
  },
  plugins: [
    typescript({
      target: "es2016",
      declaration: true,
      outDir: "dist",
      rootDir: "src",
      sourceMap: false
    }),
    external(),
    postcss({
      modules: false,
      extract: true,
      minimize: true,
      sourceMap: false
    }),
    url(),
    commonjs(),
    buble(),
    terser()
  ]
}
