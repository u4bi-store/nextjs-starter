const withPlugins = require('next-compose-plugins')
const withCss = require('@zeit/next-css')
const withOptimizedImages = require('next-optimized-images')

if (typeof require !== 'undefined') require.extensions['.css'] = (file) => {}

module.exports = withPlugins([
  [withOptimizedImages],
  [withCss]
]);