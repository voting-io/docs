module.exports = {
  blogTitle: 'Changelog do projeto',
  blogDescription: 'Veja o que há de novo no projeto',
  blogSidebarTitle: 'Todos os posts',
  blogSidebarCount: 'ALL',
  postsPerPage: 'ALL',
  showReadingTime: true,
  readingTime: ({ content, frontMatter, defaultReadingTime }) =>
    defaultReadingTime({ content, options: { wordsPerMinute: 200 } }),
}