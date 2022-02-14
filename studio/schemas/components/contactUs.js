import { type } from 'os';

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
			name: 'background',
			title: 'background',
			type: 'background'
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
			name: 'email',
			title: 'Email Address',
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
