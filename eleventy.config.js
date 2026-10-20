module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.ignores.add("src/admin/**");

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  eleventyConfig.addFilter("readableDate", (d) => {
    const x = new Date(d);
    return `${months[x.getUTCMonth()]} ${x.getUTCDate()}, ${x.getUTCFullYear()}`;
  });
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("byOrder", (arr) =>
    [...(arr || [])].sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999)));
  eleventyConfig.addFilter("where", (arr, key, val) =>
    (arr || []).filter((i) => i.data[key] === val));
  eleventyConfig.addFilter("newest", (arr) =>
    [...(arr || [])].sort((a, b) => b.date - a.date));
  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));
  eleventyConfig.addFilter("json", (v) => JSON.stringify(v));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
};
