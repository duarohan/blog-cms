module.exports = {
  extend: '@apostrophecms/piece-type',
  fields: {
    remove: [ 'basics' ],
    add: {
      _authors: {
        label: 'Author name',
        type: 'relationship',
        required: true,
        withType: 'author',
        max: 1,
        builders: {
          project: {
            title: 1,
            name: 1,
            image: 1
          }
        }
      },
      content: {
        label: 'Blog Content',
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            '@apostrophecms/video': {}
          }
        }
      },
      _categories: {
        label: 'Category Name',
        type: 'relationship',
        withType: 'category',
        max: 3,
        builders: {
          project: {
            title: 1,
            name: 1,
            image: 1
          }
        }
      },
      title: {
        label: 'Blog Title',
        type: 'string'
      },
      publishedAt: {
        label: 'Published',
        type: 'date'
      }
    },
    group: {
      metaInfo: {
        label: 'Meta information',
        fields: [ 'title', '_authors', '_categories', 'publishedAt' ]
      },
      blogFields: {
        label: 'Blog fields',
        fields: [ 'content' ]
      }
    }
  }
};
