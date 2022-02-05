export default {
    name: 'imageObject',
    title: 'Image',
    type: 'object',
    fields: [
      {
        name: 'Image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'caption',
        title: 'Caption',
        type: 'string',
        options: {
            isHighlighted: true
        }
    },
      {
        name: 'alt',
        type: 'string',
        title: 'Alternative text',
        description: 'Important for SEO and accessibility.',
        options: {
          isHighlighted: true,
        },
      },
    ],
    preview: {
      select: {
        media: 'Image',
      },
      prepare({ title, media }) {
        return {
          title: ' Image',
          subtitle: "Image",
          media
        };
      },
    },
  };
  