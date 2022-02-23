/* eslint-disable import/no-anonymous-default-export */
export default {
    title: 'Analytics',
    name: 'analytics',
    type: 'object',
    fields: [
        {
            title: 'Enable Analytics',
            name: 'analytics',
            type: 'boolean',
        },
        {
            title: 'Event Tag',
            name: 'eventTag',
            type: 'string',
            description: 'What does the even do ? eg Home_Page_visit'
        },

    ]
}