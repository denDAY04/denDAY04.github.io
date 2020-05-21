const SitemapPlugin = require('sitemap-webpack-plugin').default;

const paths = [
  '/',
  '/#/about',
  '/#/experience',
  '/#/projects',
];

module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: {
    plugins: [
      new SitemapPlugin('https://stensig.net', paths, { lastmod: true }),
    ],
  },
};
