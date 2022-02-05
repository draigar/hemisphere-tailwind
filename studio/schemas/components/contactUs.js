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
					{ title: 'Contact Type 1', value: 'contact1' },
					{ title: 'Contact Type 2', value: 'contact2' }
				]
			}
		},
		{
			name: 'background',
			title: 'background',
			type: 'background'
		},
		{
			name: 'caption',
			title: 'Tag Line Text',
			type: 'bodyText'
		},
		{
			name: 'address',
			title: 'Office Address',
			type: 'text'
		},
		{
			name: 'email',
			title: 'Email Address',
			type: 'string'
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
