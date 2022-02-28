/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        {
            name: 'footerName',
            title: 'Footer Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'footerType',
            type: 'string',
            title: 'Footer Type',
            options: {
                list: [
                    {
                        title: '4 Rows',
                        value: '4rows',
                        desctiption: 'Footer with 4 rows'
                    },
                    {
                        title: '3 Rows',
                        value: '3rows',
                        desctiption: 'Footer with 3 rows'
                    }
                ]
            },
            defaultValue: '4rows'
        },
        {
            name: 'topFooterSection',
            type: 'boolean',
            title: 'Top footer section',
            description: 'Should the footer have a top section mostly for social media handles'
        },
        {
            name: 'bottomFooterSection',
            type: 'boolean',
            title: 'Bottom footer section',
            description: 'Should the footer have a bottom section mostly for copyrights'
        },
        {
            name: 'bottomSection',
            title: 'Set bottom section',
            type: 'copyright',
            hidden: ({ parent }) => !parent?.bottomFooterSection
        },
        {
            name: 'topSectionText',
            title: 'Set top section text',
            type: 'string',
            hidden: ({ parent }) => !parent?.topFooterSection
        },
        {
            name: 'socialMediaLinks',
            title: 'Social media links',
            type: 'array',
            of: [{ type: 'socialIconsElement' }],
            hidden: ({ parent }) => !parent?.topFooterSection
        },
        {
            name: 'row1',
            title: 'Row 1',
            type: 'customText',
        },
        {
            name: 'row2',
            title: 'Row 2',
            type: 'customText',
        },
        {
            name: 'row3',
            title: 'Row 3',
            type: 'customText',
        },
        {
            name: 'row4',
            title: 'Row 4',
            type: 'customText',
            hidden: ({ parent }) => {
                return parent?.footerType === '3rows'
                console.log('checking', parent?.footerType)
            }
        },
    ]
}