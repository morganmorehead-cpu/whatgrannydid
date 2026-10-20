module.exports = {
  layout: "recipe.njk",
  tags: "recipes",
  permalink: (data) => `/recipes/${data.page.fileSlug}/`,
};
