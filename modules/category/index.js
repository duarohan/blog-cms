module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'category',
    pluralLabel: 'Categories'
  },
  fields: {
    remove: [ 'basics', 'seo' ],
    add: {
      name: {
        label: 'name',
        type: 'string'
      },
      image: {
        label: 'image',
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
