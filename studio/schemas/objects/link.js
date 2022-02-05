export default {
    name: 'link',
    type: 'object',
    title: 'Link',
    fields: [
        {
            name: 'linkType',
            type: 'string',
            options:{
                list: [
                    { title: "Internal Link", value: "internal" },
                    { title: "External Url", value: "external" },
                ],
                layout: 'radio'
            },
            initialValue:'internal'
        },
        {
            title: 'Internal Link',
            name: 'internalLink',
            description: 'Select pages or routes for navigation',
            type: 'reference',
            to: [{ type: 'page' }], 
            hidden: ({parent}) => !(parent?.linkType === 'internal' )
        },
        {
            name: 'externalUrl',
            title: 'External URL',
            description:"Use fully qualified URLS for external link",
            type: 'url',
            hidden: ({parent}) => !(parent?.linkType === 'external')
        },
        {
            name: 'newWindow',
            title: 'Open in New Window',
            type: 'boolean',
            hidden: ({parent}) => !(parent?.linkType === 'external')
        },
    ]
};