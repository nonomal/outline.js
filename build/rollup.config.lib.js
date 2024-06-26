import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'

const PLUGIN_CONFIG = [
  nodeResolve({
    mainFields: ['module', 'jsnext', 'main', 'browser']
  }),
  commonjs(),
  babel({ babelHelpers: 'bundled' }),
  terser()
]

export default [
  // For full functions module
  {
    input: './outline.js',
    output: {
      name: 'Outline',
      file: './outline.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: './anchors.js',
    output: {
      name: 'Anchors',
      file: './anchors.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: './navigator.js',
    output: {
      name: 'Navigator',
      file: './navigator.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: './drawer.js',
    output: {
      name: 'Drawer',
      file: './drawer.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: './reader.js',
    output: {
      name: 'Reader',
      file: './reader.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: './toolbar.js',
    output: {
      name: 'Toolbar',
      file: './toolbar.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: './message.js',
    output: {
      name: 'Message',
      file: './message.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  }
]
