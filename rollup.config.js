import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import json from "rollup-plugin-json";
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';

import pkg from './package.json';

const externals = [...Object.keys(pkg.peerDependencies)];

console.log(pkg, externals)
export default {
    input: 'src/index.js',
    external: externals,
    output: [
      {
        file: pkg.main,
        format: 'cjs', // 输出文件格式为CommonJS
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      external({
        jsnext: true, // 转化为ES2015
      }),
      postcss({
        modules: true,
        exec: true,
        use : [
          ['less', { javascriptEnabled: true }]
        ],
      }),
      url(),
      svgr(),
      babel({
        exclude: 'node_modules/**', // only transpile our source code
      }),
      json(),
      resolve(),
      commonjs()
    ]
  };

  // {
  //   'namedExports': {
  //     'dist/index.js': ['__moduleExports']
  //   }
  // }