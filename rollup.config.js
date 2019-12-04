import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import json from "rollup-plugin-json";
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';

import pkg from './package.json';

const externals = ['react', 'prop-types', 'react-dom', 'antd'];

export default {
    input: 'src/index.js',
    external: externals,
    output: [
      {
        file: pkg.main,
        format: 'cjs', // 输出文件格式为CommentJS
        // sourcemap: true
      },
      {
        file: pkg.module,
        format: 'es',
        // sourcemap: true
      }
    ],
    plugins: [
      external(),
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