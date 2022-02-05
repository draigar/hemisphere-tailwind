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
            title: 'Submit Button',
            name: 'submitButton',
            type: 'button',
        },
        {
            title: 'Response Message',
            name: 'submitResponse',
            type: 'customText',
        },
        {
            title: 'Response Background',
            name: 'submitResponseBackground',
            type: 'color',
        }
    ]
}