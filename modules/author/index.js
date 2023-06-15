module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Author',
    pluralLabel: 'Authors'
  },
  fields: {
    remove: [ 'basics', 'seo' ],
    add: {
      name: {
        label: 'Name',
        type: 'string'
      },
      image: {
        label: 'Image',
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          }
        }
      }
    },
    group: {
      details: {
        label: 'Details',
        fields: [ 'name', 'image' ]
      }
    }
  }
};
