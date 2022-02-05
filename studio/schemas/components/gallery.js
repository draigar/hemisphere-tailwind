export default {
    type: 'object',
    name: 'gallery',
    title: 'Gallery',
    fields: [
      {
        name: 'heading',
        type: 'customText',
        title: 'Heading',
      },
      {
        name: 'images',
        type: 'array',
        of: [{
          type: 'imageObject'
        }],
        title: 'Gallery Images',
        validation: Rule => [
          Rule.required().min(3).error('You need a minimum number of 3 images for the gallery')
        ]
      },
      
    ],
    preview: {
      select: {
        media: 'images',
      },
      prepare({ heading, media }) {
        return {
          title: "Gallery Section",
          subtitle: 'Gallery',
          media,
        };
      },
    },
  };
  