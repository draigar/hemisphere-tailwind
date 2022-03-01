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
                    { title: "Full Horizontal image", value: "carousel1" },
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
            name: 'shadow',
            title: 'Drop shadow',
            type: 'boolean',
            description: 'Should have a drop shadow',
        },
        {
            name: 'isReview',
            title: 'Add Review Mark',
            type: 'boolean',
            description: 'Add Review Mark to use as a Review style',
        },
        {
            name: 'isAnimationEnabled',
            title: 'Enable Animation',
            type: 'boolean',
            description: 'Enable animation on component',
        },
        {
            name: 'animation',
            type: 'animations',
            hidden: ({ parent }) => !(parent?.isAnimationEnabled),
        },
        {
            name: 'margin',
            title: 'Select Margin',
            type: 'margin',
            description: 'Select Button Type and Fix the properties',
        },
    ],
    preview: {
        select: {
          media: 'elements',
        },
        prepare({ media }) {
          return {
            title: 'Carousel',
            subtitle: 'Carousel',
            media,
          };
        },
      },

};