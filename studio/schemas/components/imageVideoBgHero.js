/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'imageVideoBgHeroComponent',
    type: 'object',
    fields: [
        {
            name: 'background',
            type: 'background',
            title: 'Background',
            description: 'Set the Background you want on this component',
            validation: Rule => [
                Rule.required().error('Background bust be set for this component')
            ]
        },
        {
            name: 'heading',
            type: 'customText',
            title: 'Caption Text',
            description: 'Enter the Text that will appear on the Heading of this component.'
        },
        {
            name: 'isTaglineEnabled',
            title: 'Enable Tagline',
            type: 'boolean',
            description: 'Enter the Tagline Text for this Component',
        },
        {
            name: 'tagline',
            title: 'Tag Line text',
            type: 'customText',
            hidden: ({parent}) => !(parent?.isTaglineEnabled),
            description: 'Enter the Tagline Text for this Component',
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
            name: 'textAlign',
            title: 'Select text placement',
            type: 'string',
            options: {
                list:[
                    {title: 'Left', value: 'left'},
                    {title: 'Left bottom', value: 'leftBottom'},
                    {title: 'Right', value: 'right'},
                    {title: 'Right bottom', value: 'rightBottom'},
                    {title: 'Centered', value: 'centered'},
                    {title: 'Centered Top', value: 'centeredTop'},
                    
                ],
            },
            validation: Rule => [
                Rule.required().error('Text Alignment must be selected')
            ],
            description: '',
        },
    ],
    preview: {
        select: {
        //   media: 'image',
        },
        prepare({ title, media }) {
          return {
            title: "Image Video Background Hero",
            subtitle: "Image Video Background Hero",
          };
        },
      },
}