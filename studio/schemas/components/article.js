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
            type: 'string',
            description: 'Enter the Heading Text Content for this Component',
        }, 
        {
            name: 'datePublished',
            title: 'Published date',
            type: 'date',
            description: 'Enter date published',
        },
        {
            name: 'subHeading',
            title: 'Enter Sub Heading Text',
            type: 'string',
            description: 'Enter the Sub Heading Text Content for this Component',
        },
        {
            name: 'articleBody',
            title: 'Enter Article Body',
            type: 'customText',
            description: 'Enter the Article Body Content for this Component',
        },
        {
            name: 'articleBorderColor',
            title: 'Choose article block box color',
            type: 'color',
            // description: 'Enter the quote author',
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
  