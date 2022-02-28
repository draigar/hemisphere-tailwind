/* eslint-disable import/no-anonymous-default-export */
export default {
    type: 'object',
    name: 'socialIconsElement',
    title: 'Social Icons Element',
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
            name: 'url',
            title: 'Social media url',
            type: 'string',
        },
        {
            name: 'socialMediaName',
            title: 'Social media name',
            type: 'string',
        },
        {
			name: 'iconType',
			type: 'boolean',
			title: 'Social icon type',
			description: 'Use custom icon instead of defaults'
		},
        {
            name: 'socialIconImage',
            title: 'Upload custom social icon image',
            type: 'image',
            hidden: ({ parent }) => !parent?.iconType
        },
        {
            name: 'iconList',
            title: 'Social icons',
            type: 'string',
            options: {
				list: [
					{
						title: 'Facebook',
						value: 'facebook',
					},
					{
						title: 'Instagram',
						value: 'instagram',
					},
                    {
						title: 'Twitter',
						value: 'twitter',
					},
                    {
						title: 'Google',
						value: 'google',
					},
                    {
						title: 'LinkedIn',
						value: 'linkedin',
					},
                    {
						title: 'Twitch',
						value: 'twitch',
					},
				]
			},
            hidden: ({ parent }) => parent?.iconType
        },
    ],
    preview: {
        select: {
        //   title: 'type',
          media: 'Image',
        },
        prepare({ title, media }) {
          return {
            title: "Social Icons Element",
            subtitle: "Carousel",
            media,
          };
        },
      },
};  