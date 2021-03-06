/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'errorPage',
    title: 'Error Page',
    type: 'document',
    fields: [
        {
            name: 'errorPageName',
            title: 'Error Page Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'background',
            type: 'background',
            title: 'Background',
            description: 'Set the Background you want on this component',
        },
        {
            name: 'title',
            type: 'customText',
            title: 'Error Title'
        },
        {
            name: 'description',
            type: 'customText',
            title: 'Error Content'
        },
        {
            name: 'isCTAEnabled',
            title: 'Enable CTA',
            type: 'boolean',
        },
        {
            name: 'buttonType',
            title: 'Select Button Type',
            type: 'button',
            hidden: ({ parent }) => !(parent?.isCTAEnabled),
            description: 'Select Button Type and Fix the properties',
        },
    ] 
}