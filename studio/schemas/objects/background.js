export default {
    title: 'Background',
    name: 'background',
    type: 'object',
    fields: [
        {
            title: "Type",
            name: "type",
            type: "string",
            options: {
                list: [
                    {title: "Image", value: "image"},
                    {title: "Color", value: "color"},
                    {title: "Video", value: "video"},
                ]
            }
        },
        {
            title: 'Select Color',
            name: 'backgroundColor',
            type: 'color',
            hidden: ({parent}) => !(parent?.type === "color"),
        },
        {
            title: 'Select Image',
            name: 'backgroundImage',
            type: 'image',
            options: {
                hotspot: true,
            },
            hidden: ({parent}) => !(parent?.type === "image"),
        },
        {
            title: 'Select Video',
            name: 'backgroundVideo',
            type: 'video',
            hidden: ({parent}) => !(parent?.type === "video")
        }
    ]
}