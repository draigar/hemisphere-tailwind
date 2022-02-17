/* eslint-disable import/no-anonymous-default-export */

export default {
	name: 'contact',
	type: 'object',
	description: 'Contact Us',
	fields: [
		{
			name: 'type',
			title: 'Type',
			type: 'string',
			options: {
				list: [
					{ title: 'Contact Type 1 with Background Color', value: 'contact1' },
					{ title: 'Contact Type 2 with Image', value: 'contact2' }
				]
			}
		},
		{
			name: 'backgroundColor',
			title: 'background',
			type: 'colors',
			hidden: ({parent}) => parent?.type !== 'contact1',
		},
		{
			name: 'backgrounds',
			title: 'background',
			type: 'background',
			hidden: ({parent}) => parent?.type !== 'contact2',
		},
		{
			name: 'heading',
			title: 'Heading',
			type: 'customText'
		},
		{
			name: 'caption',
			title: 'Tag Line Text',
			type: 'customText'
		},
		{
			name: 'address',
			title: 'Office Address',
			type: 'customText'
		},
		{
			name: 'inputElement',
			title: 'Input Settings',
			type: 'formField',
		}, 
		{
			name: 'buttonType',
			title: 'Configure Submit Button',
			type: 'button',
			validation: (Rule) => [
				Rule.required().error('Button is Required for Contact Us Form')
			]
		}
	],
	preview: {
		select: {
			//   title: 'type',
		},
		prepare({ title, media }) {
			return {
				title: 'Contact Us',
				subtitle: 'Contact information'
			};
		}
	}
};
