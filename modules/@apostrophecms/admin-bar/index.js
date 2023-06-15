module.exports = {
  options: {
    groups: [
      {
        name: 'file',
        label: 'File',
        items: [
          '@apostrophecms/file',
          '@apostrophecms/file-tag'
        ]
      },
      {
        name: 'images',
        label: 'Images',
        items: [
          '@apostrophecms/image',
          '@apostrophecms/image-tag'
        ]
      },
      {
        name: 'pieces',
        label: 'Article',
        items: [
          'article',
          'topic'
        ]
      }
    ]
  }
};
