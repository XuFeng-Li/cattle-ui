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

export default {
    input: 'src/index.js',
    external: externals,  // 需要处理成外部包引用列表
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
      external(), // 打包的时候排除external, 并自动将库的peerDependencies配置添加到 external 配置中;
      resolve({
        jsnext: true, // 表示将原来的 node 模块转化成 ES6 模块
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
      commonjs(), // 将CommonJS模块转换为ES6，以便rollup打包
    ]
  };

  // {
  //   'namedExports': {
  //     'dist/index.js': ['__moduleExports']
  //   }
  // }