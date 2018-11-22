const htmlmin = require('html-minifier');

module.exports = eleventyConfig => {

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true
  });

  // eleventyConfig.addLayoutAlias('base', 'includes/base.pug');

  eleventyConfig.addShortcode('Icon', logo => `
    <svg aria-hidden="true" role="presentation">
      <use xlink:href="#icon-${logo}" />
    </svg>
  `);

  // eleventyConfig.addFilter('myFilter', (val, arg1, arg2) => val + arg1 + arg2);

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

  // Don't process folders with static assets and cms admin
  eleventyConfig.addPassthroughCopy('assets/dist');
  eleventyConfig.addPassthroughCopy('assets/fonts');
  eleventyConfig.addPassthroughCopy('assets/favicons');
  // eleventyConfig.addPassthroughCopy('admin');

  return {
    dir: {
      input: '.',
      data: 'config',
      includes: 'views',
    }
  };
};