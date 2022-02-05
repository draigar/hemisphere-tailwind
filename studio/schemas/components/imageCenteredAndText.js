export default {
    name: 'textCenteredAndImageBg',
    type: 'object',
    description: 'Text Centered and image Background',
    fields: [
        {
            name: 'background',
            type: 'background',
            title: 'Background',
            description: 'Set the Background you want on this component',
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
        //   media: 'image',
        },
        prepare({ title, media }) {
          return {
            title: "Text Centered and Image Background",
            subtitle: "Text Centered and Image Background",
          };
        },
      },
}