export default {
    title: 'Colors',
    name: 'colors',
    type: 'object',
    fields: [
        {
            title: 'Select Color class',
            name: "colorClass",
            type: "string",
            options: {
                list: [
                    {title: "brand", value: "brand"},
                    {title: "neutral", value: "neutral"},
                    {title: "black", value: "black"},
                    {title: "primary", value: "primary"},
                    {title: "white", value: "white"},
                ],
                layout: 'radio',
            }
        },
        {
            title: "Brand Color Type",
            name: "brand",
            type: "string",
            options: {
                list: [
                    {title: "Primary", value: "primary"},
                    {title: "Darker", value: "darker"}
                ]
            },
            hidden: ({parent}) => !(parent?.colorClass === "brand")
        },
        {
            title: "Neutral Color Type",
            name: "neutral",
            type: "string",
            options: {
                list: [
                    {title: "Type 1", value: "1"},
                    {title: "Type 2", value: "2"},
                    {title: "Type 3", value: "3"},
                    {title: "Type 4", value: "4"}
                ]
            },
            hidden: ({parent}) => !(parent?.colorClass === "neutral")
        },
        {
            title: "Black Color Type",
            name: "black",
            type: "string",
            options: {
                list: [
                    {title: "Type 1", value: "1"},
                    {title: "Type 2", value: "2"}
                ]
            },
            hidden: ({parent}) => !(parent?.colorClass === "black")
        },
        {
            title: "Primary Color Type",
            name: "primary",
            type: "string",
            options: {
                list: [
                    {title: "Type 50", value: "50"},
                    {title: "Type 100", value: "100"},
                    {title: "Type 200", value: "200"},
                    {title: "Type 300", value: "300"},
                    {title: "Type 400", value: "400"},
                    {title: "Type 500", value: "500"},
                    {title: "Type 600", value: "600"},
                    {title: "Type 700", value: "700"},
                    {title: "Type 800", value: "800"},
                    {title: "Type 900", value: "900"},
                ]
            },
            hidden: ({parent}) => !(parent?.colorClass === "primary")
        }
    ]
}