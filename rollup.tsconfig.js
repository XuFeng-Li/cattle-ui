import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import less from 'rollup-plugin-less';

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
    // babel({
    //   exclude: 'node_modules/**', // only transpile our source code
    // }),
    typescript({
      typescript: require("typescript"),
      tsconfig: "tsconfig.json",
      transformers: () => ({
        before: [tsImportPlugin]
      }),
    }),
    less({
      insert: "true",
      options: {
        javascriptEnabled: true,
        modifyVars: { //Ant design style overrides
          "@primary-color": "#BADA55"
        }
      }
    }),
  ]
}