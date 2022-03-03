module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");

  // Copy `css/` to `_site/css`
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addPassthroughCopy({
    "node_modules/modern-css-reset/dist/reset.min.css": "css/reset.min.css"
  })
};
