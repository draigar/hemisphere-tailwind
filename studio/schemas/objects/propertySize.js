export default {
    type:'object',
    name:'size',
    fields:[
        {
            name: "size",
            type: "string",
            options: {
            list: [
                { title: "2 Extra Large", value: "xxl" },
                { title: "Extra Large", value: "xl" },
                { title: "Large", value: "lg" },
                { title: "Medium", value: "md" },
                { title: "Small", value: "sm" },
                { title: "Extra Small", value: "xs" },
                { title: "2 Extra Small", value: "xxs" },
                ],
            },
            initialValue: 'md',
        },
    ]
}