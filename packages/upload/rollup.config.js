import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

import pkg from './package.json'
console.log(pkg, 123)
export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/es/index.js',
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
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
    postcss({
      modules: true,
      exec: true,
      use : [
        ['less', { javascriptEnabled: true }]
      ],
    }),
    // less({
    //   insert: "true",
    //   options: {
    //     javascriptEnabled: true,
    //     modifyVars: { //Ant design style overrides
    //       "@primary-color": "#BADA55"
    //     }
    //   }
    // }),
  ]
}