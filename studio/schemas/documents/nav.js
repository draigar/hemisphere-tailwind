import { GrNavigate } from 'react-icons/gr';
import { isUniqueAcrossAllDocuments } from '../../lib/isUniqueAcrossAllDocuments';

export default {
	name: 'navigation',
	title: 'Navigation',
	type: 'document',
	icon: GrNavigate,
	fields: [
		{
			name: 'navigationName',
			type: 'string',
			title: 'Navigation Name'
		},
		{
			name: 'type',
			type: 'string',
			title: 'Navigation Type',
			options: {
				list: [
					{
						title: 'Nav Style 1',
						value: 'navStyle1',
						desctiption: 'Style 1Lorem Ipsum'
					},
					{
						title: 'Nav Style 2',
						value: 'navStyle2',
						desctiption: 'Style 2 Lorem Ipsum'
					}
				]
			},
			initialValue: 'navStyle1'
		},
		{
			name: 'navigationCTA',
			type: 'boolean',
			title: 'Navigation Item CTA',
			description: 'Should the Navigation have CTA'
		},
		{
			name: 'ctaButton',
			type: 'button',
			title: 'CTA Button Type',
			hidden: ({ parent }) => !parent?.navigationCTA
		},
		{
			name: 'items',
			type: 'array',
			title: 'Navigation items',
			of: [{ type: 'navigationItem' }]
		}
	]
};
