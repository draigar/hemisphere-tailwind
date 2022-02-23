/* eslint-disable import/no-anonymous-default-export */
export default {
    type: 'object',
    name: 'card',
    title: 'Card with heading and Text',
    fields: [
        {
            title: 'Heading',
            name: 'heading',
            type: 'customText',
            //TODO : Find our how to use conditional hidden for the value of a different field.
        },
        {
            title: 'SubHeading',
            name: 'subheading',
            type: 'customText',
        },
        {
            name: 'bodyText',
            title: 'Body Text',
            type: 'customText',
        },
        {
            name: 'Image',
            title: 'Image',
            type: 'image',
        },
        {
            title: 'Background',
            name: 'background',
            type: 'color',
        },
        {
            name: 'buttonType',
            title: 'Select Button Type',
            type: 'button',
            hidden: ({parent}) => !(parent?.isCTAEnabled),
            description: 'Select Button Type and Fix the properties',
        },
        {
            name: 'isCTAEnabled',
            title: 'Enable CTA',
            type: 'boolean',
            description: 'Enter the Tagline Text for this Component',
        },
    ],
    preview: {
        select: {
        //   title: 'card',
          media: 'Image',
        },
        prepare({ title, media }) {
          return {
            title: "Card with heading and Text",
            media,
          };
        },
      },
};