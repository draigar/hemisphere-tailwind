export default {
    name: 'videoAndTextCaption',
    type: 'object',
    description: 'Video And Text Caption',
    fields: [
        {
            name: 'isCustomBg',
            title: 'Change Background',
            type: 'boolean',
            description: 'Enable if you want to change the background from the default',
        },
        {
            name: 'background',
            type: 'background',
            title: 'Background',
            hidden: ({parent}) => !(parent?.isCustomBg),
            description: 'Set the Background you want on this component',
        },
        {
            name: 'video',
            type: 'video',
            title: 'Select Video',
            validation: Rule => [
                Rule.required().error('Video must be set for this component')
            ],
            description: 'Select the Video for this Component'
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
    ],
    preview: {
        select: {
        //   media: 'image',
        },
        prepare({ title, media }) {
          return {
            title: "Video And Text Caption",
            subtitle: "Video And Text Caption",
          };
        },
      },
}