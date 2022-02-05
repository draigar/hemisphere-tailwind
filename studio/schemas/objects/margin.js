export default {
    title: 'Margin',
    name: 'margin',
    type: 'object',
    fields: [
        {
            title: "Margin Type",
            name: "type",
            type: "string",
            options: {
                list: [
                    { title: "top", value: "top" },
                    { title: "side", value: "side" },
                    { title: "topandside", value: "topandside" },
                    { title: "buttomandside", value: "buttomandside" },
                    { title: "buttom", value: "buttom" },
                ]
            }
        }, 
        {
            title: 'Top Margin Size',
            name: 'topmarginsize',
            type: 'size',
            hidden: ({parent}) => !(parent?.type === 'top') || !(parent?.type === 'topandside')
        },
        {
            title: 'Side Margin Size',
            name: 'sidemarginsize',
            type: 'size',
            hidden: ({parent}) => !(parent?.type === 'side') || !(parent?.type === 'topandside') || !(parent?.type === 'buttomandside')
        },
        {
            title: 'Button Margin Size',
            name: 'buttommarginsize',
            type: 'size',
            hidden: ({parent}) => !(parent?.type === 'buttom') || !(parent?.type === 'buttomandside')
        },
    ]
}