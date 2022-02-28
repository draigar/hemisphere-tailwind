export default {
	name: 'imageBgandTextCardOverflow',
	type: 'object',
	description: 'Image Background and text-Card Overflow',
	fields: [
		{
            name: 'type',
            type: 'string',
            options: {
                list: [
                    {title: 'Image Background with card type', value: 'cta1'},
                    {title: 'Image Background with small layered text', value: 'section2'},
                ],
            }
        },
		{
			name: 'image',
			type: 'imageObject',
			title: 'Select Image',
			validation: (Rule) => [
				Rule.required().error('image must be set for this component')
			],
			description: 'Select the Image for this Component'
		},
		{
			name: 'heading',
			title: 'Enter Heading Text',
			type: 'customText',
			description: 'Enter the Heading Text Content for this Component'
		},
		{
			name: 'bodyText',
			title: 'Body Content text',
			type: 'customText',
			description: 'Enter the Body Text Content for this Component'
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
			hidden: ({ parent }) => !parent?.isCTAEnabled,
			description: 'Select Button Type and Fix the properties'
		},
		{
            name: 'margin',
            title: 'Select Margin',
            type: 'margin',
            description: 'Select Button Type and Fix the properties',
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
			media: 'image'
		},
		prepare({ title, media }) {
			return {
				title: 'Image Background and text-Card Overflow',
				subtitle: 'Image Background and text-Card Overflow',
				media
			};
		}
	}
};
