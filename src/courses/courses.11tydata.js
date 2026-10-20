module.exports = {
  layout: "course.njk",
  tags: "courses",
  permalink: (data) => `/courses/${data.page.fileSlug}/`,
};
