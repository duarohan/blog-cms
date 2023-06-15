// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: 'blog-post-page',
        label: 'Blog Index'
      },
      {
        name: 'default-page',
        label: 'Default'
      }
    ]
  }
};
