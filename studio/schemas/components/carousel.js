export default {
    title: 'Carousel',
    name: 'carousel',
    type: 'object',
    fields: [
        {
            title: "Carousel Type",
            name: "type",
            type: "string",
            options: {
                list: [
                    { title: "Carousel Type 1", value: "carousel1" },
                    { title: "Carousel Type 2", value: "carousel2" },
                    { title: "Carousel Type 3", value: "carousel3" },
                    { title: "Carousel Type 4", value: "carousel4" }
                ]
            }
        },
        {
            title: 'Title Text',
            name: 'titleText',
            type: 'customText',
        },
        {
            title: 'Carousel Elements',
            name: 'elements',
            type: 'array',
            of: [{type: 'carouselElements'}]
        },
        {
            title: 'Background',
            name: 'background',
            type: 'background',
        },
        {
            title: 'Border Color',
            name: 'borderColor',
            type: 'colors',
        },
        
    ],
    preview: {
        select: {
          media: 'elements',
        },
        prepare({ title, media }) {
          return {
            title: 'Carousel',
            subtitle: 'Carousel',
            media,
          };
        },
      },

};