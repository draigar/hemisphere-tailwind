import { GrNavigate } from "react-icons/gr";

export default {
    name: 'navigationItem',
    title: 'Navigation Item',
    type: 'object',
    icon: GrNavigate,
    fields: [
        {
            name: 'navName',
            title: 'Nav Item Name',
            type: 'string',
            description: 'Nav Item Placeholder Text'
        },
        {
            name: "navigationItemUrl",
            type: "link", 
            title: "Navigation Item URL"
        }
    ]
}