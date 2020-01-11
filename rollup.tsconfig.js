import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import less from 'rollup-plugin-less';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel'; // 需要使用最新JS语法，babel 转码
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import json from "rollup-plugin-json";
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import { uglify } from "rollup-plugin-uglify";

import pkg from './package.json'

const tsImportPluginFactory = require("ts-import-plugin");

const tsImportPlugin = tsImportPluginFactory({
  libraryDirectory: "es",
  libraryName: "antd",
  style: true,
});

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.peerDependencies)
  ],
  plugins: [
    external(),
    resolve({
      jsnext: true,
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
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
    typescript({
      typescript: require("typescript"),
      tsconfig: "tsconfig.json",
      transformers: () => ({
        before: [tsImportPlugin]
      }),
    }),
  ]
}