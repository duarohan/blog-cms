require('apostrophe')({
  shortName: 'a3-demo',
  baseUrl: 'http://localhost:3000',
  modules: {
    localizations: {},
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'demo-rte'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'demo-image'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'demo-video'
      }
    },
    '@apostrophecms/asset': {
      options: {
        refreshOnRestart: true
      }
    },
    '@apostrophecms/seo': {},
    asset: {},
    helper: {},
    'cta-links-widget': {},
    'columns-widget': {},
    'container-widget': {},
    'button-widget': {},
    'blog-post': {},
    'blog-post-page': {},
    author: {},
    category: {},
    'default-page': {},
    'github-prs-widget': {}
  }
});
