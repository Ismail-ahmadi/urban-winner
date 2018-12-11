const day = require('dayjs');
const htmlmin = require('html-minifier');
const config = require('./config/config.json');
const t = require('./config/languages.json');

module.exports = eleventyConfig => {

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true
  });

  eleventyConfig.addShortcode('Icon', logo => `
    <svg aria-hidden="true" role="presentation">
      <use xlink:href="#icon-${logo}" />
    </svg>
  `);

  eleventyConfig.addFilter('formatDate', date => day(date).format('MMM D, YYYY'));

  eleventyConfig.addFilter('t', (key, lang = config.site.lang) => t[lang][key]);

  eleventyConfig.addFilter('getLang', path => {
    const id = path.slice(2).split('/')[1];
    return id.length === 2 ? id : config.site.lang;
  });

  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
    }
    return content;
  });

  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPassthroughCopy('assets/dist');
  eleventyConfig.addPassthroughCopy('assets/fonts');
  eleventyConfig.addPassthroughCopy('assets/favicons');

  return {
    dir: {
      input: '.',
      data: 'config',
      includes: 'views',
    }
  };
};