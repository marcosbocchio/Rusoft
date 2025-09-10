const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // Desactiva ESLint durante el desarrollo
  
  // SEO optimizations
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  
  // PWA and SEO
  pwa: {
    name: 'Rusoft - Desarrollo de Software',
    themeColor: '#052c59',
    msTileColor: '#052c59',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      skipWaiting: true
    }
  },
  
  // Build optimizations
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  },
});
