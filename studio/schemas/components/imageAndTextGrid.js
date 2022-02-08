export default {
    name: 'imageAndTextGrid',
    type: 'object',
    description: 'Image And Text Grid',
    fields: [
        {
            name: 'background',
            type: 'background',
            title: 'Background',
            hidden: ({parent}) => !(parent?.isCustomBg),
            description: 'Set the Background you want on this component',
        },
        {
            name: 'image',
            type: 'imageObject',
            title: 'Select Image',
            validation: Rule => [
                Rule.required().error('image bust be set for this component')
            ],
            description: 'Select the Image for this Component'
        },
        {
            name: 'imagePositon',
            type: 'string',
            options: {
                list: [
                    {title: 'Image Left', value: 'left'},
                    {title: 'Image Right', value: 'right'},
                ],
                description: 'Select the image position',
            },
            initialValue: 'left',
        },
        {
            name: 'heading',
            title: 'Enter Heading Text',
            type: 'customText',
            description: 'Enter the Heading Text Content for this Component',
        },
        {
            name: 'bodyText',
            title: 'Body Content text',
            type: 'customText',
            description: 'Enter the Body Text Content for this Component',
        },
        {
            name: 'isCTAEnabled',
            title: 'Enable CTA',
            type: 'boolean',
            description: 'Enter the Tagline Text for this Component',
        },
        {
            name: 'buttonType',
            title: 'Select Button Type',
            type: 'button',
            hidden: ({parent}) => !(parent?.isCTAEnabled),
            description: 'Select Button Type and Fix the properties',
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
          media: 'image',
        },
        prepare({ title, media }) {
          return {
            title: "Image And Text Grid",
            subtitle: "Image And Text Grid",
            media,
          };
        },
      },
}
