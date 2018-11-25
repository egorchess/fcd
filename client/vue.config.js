module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'static' : '',
  outputDir: 'build',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      definitions[0] = Object.assign(definitions[0], {
        PORT: require('../server/config').PORT
      });
      return definitions;
    });
  }
};
