const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withOptimizedImages = require('next-optimized-images')

if (typeof require !== 'undefined') require.extensions['.css'] = (file) => {}

module.exports = withPlugins([
  [withOptimizedImages],
  [withSass]
]);