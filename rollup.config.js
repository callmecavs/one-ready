import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

const info = require('./package.json')

const config = {
  entry: 'src/one-ready.js',
  plugins: [
    resolve(),
    babel({
      babelrc: false,
      presets: [
        "es2015-rollup",
        "stage-0"
      ]
    })
  ],
  targets: [
    {
      dest: info.main,
      format: 'umd',
      moduleName: 'OneReady'
    }, {
      dest: info.module,
      format: 'es'
    }
  ]
}

export default config
