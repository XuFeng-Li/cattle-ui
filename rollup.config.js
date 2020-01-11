import babel from 'rollup-plugin-babel'; // 需要使用最新JS语法，babel 转码
import commonjs from 'rollup-plugin-commonjs'; // rollup-plugin-node-resolve 插件可以解决 ES6模块的查找导入，但是npm中的大多数包都是以CommonJS模块的形式出现的，所以需要使用这个插件将CommonJS模块转换为 ES2015 供 Rollup 处理
import external from 'rollup-plugin-peer-deps-external'; // 打包的时候排除external列表中的包，作为外部依赖
import postcss from 'rollup-plugin-postcss'; 
import resolve from 'rollup-plugin-node-resolve'; // 帮助 Rollup 查找外部模块，然后安装
import json from "rollup-plugin-json";
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
// import { uglify } from "rollup-plugin-uglify";

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
        plugins: [autoprefixer, cssnano],
        extract: 'dist/css/bundle.css',
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