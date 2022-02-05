export default {
    type: 'object',
    name: 'emailformsection',
    title: 'Email Form Section',
    fields: [
      {
        name: 'heading',
        type: 'string',
        title: 'Heading',
      },
      {
        name: 'label',
        type: 'string',
        title: 'Label',
      },
      {
        name: 'input_label',
        type: 'portableText',
        title: 'Input Label',
      },
      {
        name: 'input_placeholder',
        type: 'simplePortableText',
        title: 'Input Placeholder',
      },
      {
        name: 'bg',
        type: 'background',
        title: 'Background Image',
      },
      {
        name: 'button',
        type: 'array',
        title: 'Button',
        of: [
          {
            title: 'Button',
            type: 'button',
          },
        ],
      },
    ],
    preview: {
      select: {
        heading: 'heading',
        subtitle: 'label',
        media: 'image',
      },
      prepare({ heading, media }) {
        return {
          title: `Image: ${heading}`,
          subtitle: 'Email Form Section',
          media,
        };
      },
    },
  };
  