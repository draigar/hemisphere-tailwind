/* eslint-disable import/no-anonymous-default-export */
export default {
    title: 'Input Element',
    name: 'inputElement', 
    type: 'object',
    fields: [
        {
            title: "Input Type",
            name: "type",
            type: "string",
            options: {
                list: [
                    { title: "Email", value: "email" },
                    { title: "Text", value: "text" },
                    { title: "Text Area", value: "textArea" },
                ]
            }
        }, 
        {
            title: 'Input Label',
            name: 'inputlabel',
            type: 'string',
        },
        {
            title: 'Input Placeholder',
            name: 'inputplaceholder',
            type: 'string',
        },
    ],
    //TODO: Handle Previews in Sanity Schema
}