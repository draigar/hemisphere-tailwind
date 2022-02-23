/* eslint-disable import/no-anonymous-default-export */
export default {
    type: 'object',
    name: 'breakPoint',
    fields: [
        {
            name: "size",
            type: "size",
            title: "Select Breakpoint Height"
        },
    ],
    preview: {
        prepare() {
            return {
                title: "Breakpoint",
                subtitle: 'Space between components',
            };
        },
    },
}