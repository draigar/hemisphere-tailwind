/* eslint-disable import/no-anonymous-default-export */

export default {
    name: 'partners',
    type: 'object',
    description: 'Partners',
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
            hidden: ({ parent }) => !(parent?.isCustomBg),
            description: 'Set the Background you want on this component',
        },
        {
            name: 'heading',
            title: 'Add Heading',
            type: 'customText',
        },
        {
            name: 'caption',
            title: 'Add Caption',
            type: 'customText',
        },
        {
            name: 'partnerLogo',
            title: 'Add Partner Logo',
            type: 'array',
            of: [
                { type: 'imageObject' }
            ]
        },
        {
            name: 'margin',
            title: 'Margin Settings',
            type: 'margin',
        },
        {
            name: 'height',
            title: 'Height Size',
            type: 'size',
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
        }

    ],
    preview: {
        select: {
            //   media: 'images',
        },
        prepare({ heading, media }) {
            return {
                title: "Our partners",
                subtitle: 'Partners',
                // media,
            };
        },
    },

}