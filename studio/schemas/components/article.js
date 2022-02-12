// eslint-disable-next-line import/no-anonymous-default-export
export default {
    type: 'object',
    name: 'article',
    title: 'Article',
    fields: [
        {
            name: 'type',
            type: 'string',
            options: {
                list: [
                    {title: 'Article 1 with styled heading', value: 'article1'},
                    {title: 'Simple Article Type', value: 'article2'},
                    {title: 'Article 3 with quote heading', value: 'article3'},
                ],
                initialValue: 'none',
                description: 'Select the type of article component',
            }
        },
        {
            name: 'heading',
            title: 'Enter Heading Text',
            type: 'customText',
            description: 'Enter the Heading Text Content for this Component',
        },
        {
            name: 'subHeading',
            title: 'Enter Sub Heading Text',
            type: 'customText',
            description: 'Enter the Sub Heading Text Content for this Component',
        },
        {
            name: 'articleBody',
            title: 'Enter Article Body',
            type: 'customText',
            description: 'Enter the Article Body Content for this Component',
        },
        {
            name: 'image',
            type: 'imageObject',
            title: 'Select Image',
            description: 'Select the Image for this Component '
        },
        {
            name: 'author',
            title: 'Enter Quote Author',
            type: 'string',
            description: 'Enter the quote author',
        },
        
      
    ],
    preview: {
      select: {
        media: 'images',
      },
      prepare({ media }) {
        return {
          title: "Article Section",
          subtitle: 'Article',
          media,
        };
      },
    },
};
  