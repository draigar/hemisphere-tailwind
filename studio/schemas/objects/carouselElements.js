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
            name: 'Heading',
            type: 'customText',
            title: 'Heading Text',
            //TODO: Check how to add default value of an objet from option Values.
        },
        {
            name: 'bodyText',
            type: 'customText',
            title: 'Body Text',
        },
        {
            name: 'Image',
            type: 'imageObject',
            title: 'Image',
        },
        {
            title: 'CTA Type',
            name: 'cta',
            type: 'string',
            options: {
                list: [
                    { title: "None", value: "none" },
                    { title: "Button", value: "button" },
                    { title: "Embed", value: "embed" },
                ],
            },
            initialValue: "none",
        },
        {
            title: 'Button',
            name: 'button',
            type: 'button',
            hidden: ({parent}) => !(parent?.cta === "button")
        },
        {
            title: 'link',
            description: 'Use this to link between pages on the website',
            name: 'elementLink',
            type: 'link',
            hidden: ({parent}) => !(parent?.cta === "embed")
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