const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  // 佈署 https://tzuhui.io/2020/03/02/Vue/Vue-CLI3-to-github-pages/
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-shopping/'
    : '/',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
  },
});
