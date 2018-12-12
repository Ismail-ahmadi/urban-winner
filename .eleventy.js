const day = require('dayjs');
const htmlmin = require('html-minifier');
const t = require('./config/languages.json');
const config = require('./config/config.json');

module.exports = eleventyConfig => {
  /**
   * Filters
   */
  eleventyConfig.addFilter('t', (key, lang = config.site.lang) => t[lang][key]);

  eleventyConfig.addFilter('formatDate', date => day(date).format('MMM D, YYYY'));

  eleventyConfig.addFilter('getLang', path => {
    const id = path.slice(2).split('/')[1];
    return id.length === 2 ? id : config.site.lang;
  });

  eleventyConfig.addFilter('getImageUrl', (url, width) => `${url}-/resize/${width}x/-/quality/lighter/`);

  /**
   * Shortcodes
   */
  eleventyConfig.addShortcode('Icon', logo => `
    <svg aria-hidden="true" role="presentation">
      <use xlink:href="#icon-${logo}" />
    </svg>
  `);

  eleventyConfig.addShortcode('Image', (url, alt) => `
    <img alt="${alt}" src="${url}-/resize/800x/-/quality/lighter/" 
    srcset="
      ${url}-/resize/1600x/-/quality/lighter/ 1600w, 
      ${url}-/resize/1440x/-/quality/lighter/ 1440w, 
      ${url}-/resize/1280x/-/quality/lighter/ 1280w, 
      ${url}-/resize/1024x/-/quality/lighter/ 1024w, 
      ${url}-/resize/768x/-/quality/lighter/ 768w, 
      ${url}-/resize/576x/-/quality/lighter/ 576w" >
  `);

  /**
   * Templating config
   */
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true
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

  /**
   * Copy our assets folders as is
   */
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