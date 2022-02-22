export default {
    title: 'Form Field',
    name: 'formField',
    type: 'object',
    fields: [
        {
            title: 'Select Input Element',
            name: 'inputElements',
            type: 'array',
            of: [{type: 'inputElement'}]
        },
        {
            title: 'Input Label Color',
            name: 'inputLabelColor',
            type: 'color',
        },
        {
            title: 'Response Message',
            name: 'submitResponse',
            type: 'customText',
        },
    ]
}