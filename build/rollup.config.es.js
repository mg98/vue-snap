import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'VueSnap',
    file: 'dist/vue-snap.esm.js',
    format: 'esm',
    globals: {
      'seamless-scroll-polyfill/dist/esm/Element.scrollBy': 'Element_scrollBy'
    }
  },
  external: [
    'vue',
    'seamless-scroll-polyfill'
  ]
})

export default config
