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
            type: 'colors',
        },
        {
            title: 'Border Color',
            name: 'borderColor',
            type: 'colors',
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