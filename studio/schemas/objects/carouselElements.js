export default {
    type: 'object',
    name: 'carouselElements',
    title: 'Carousel Elements',
    fieldsets: [
        {
            title: 'Link',
            name: 'link',
            options: {
                collapsible: true, 
            }
        },
    ],
    fields: [
        {
            name: 'heading',
            type: 'customText',
            title: 'Heading Text',
            //TODO: Check how to add default value of an objet from option Values.
        },
        {
            name: 'body',
            type: 'customText',
            title: 'Body Text',
        },
        {
            name: 'Image',
            type: 'imageObject',
            title: 'Image',
        },
        {
            name: 'isCTAEnabled',
            title: 'Enable CTA',
            type: 'boolean',
            description: 'Enter the Tagline Text for this Component',
        }, 
        {
            title: 'Button',
            name: 'button',
            type: 'button',
            hidden: ({ parent }) => !(parent?.isCTAEnabled),
        },
    ],
    preview: {
        select: {
        //   title: 'type',
          media: 'Image',
        },
        prepare({ title, media }) {
          return {
            title: "Carousel Element",
            subtitle: "Carousel",
            media,
          };
        },
      },
};  