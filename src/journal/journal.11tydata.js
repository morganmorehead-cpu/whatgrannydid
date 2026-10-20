module.exports = {
  layout: "post.njk",
  tags: "posts",
  permalink: (data) => `/journal/${data.page.fileSlug}/`,
};
