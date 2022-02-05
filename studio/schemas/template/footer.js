export default {
    type: 'object',
    name: 'Footer',
    title: 'Footer',
    fields: [
      {
        name: 'heading',
        type: 'customText',
        title: 'Heading Text',
      },
      {
        name: 'tagline',
        type: 'customText',
        title: 'Tag Line',
      },
      {
        name: 'background',
        type: 'background',
        title: 'Background',
        
      }
    ],
    preview: {
      select: {
        title: 'heading',
        media: 'background',
      },
      prepare({ title, media }) {
        return {
          title,
          subtitle: 'Hero section',
          media,
        };
      },
    },
  };
  