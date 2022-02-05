export default {
    title: 'Input Element',
    name: 'inputElement',
    type: 'object',
    fields: [
        {
            title: "Button Type",
            name: "type",
            type: "string",
            options: {
                list: [
                    { title: "Email", value: "Email" },
                    { title: "Text", value: "text" },
                    { title: "Text Area", value: "textArea" },
                ]
            }
        },  
        {
            title: 'Input Background Color',
            name: 'inputBackgroundColor',
            type: 'colors',
        },
    ],
    //TODO: Handle Previews in Sanity Schema
}