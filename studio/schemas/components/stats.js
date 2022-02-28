import { type } from "os";

export default {
    name: 'statistics',
    type: 'object',
    description: 'Statistics',
    fields:[
        {
        name:'type',
        title: 'Type',
        type: 'string',
        options:{
            list: [
                {title: 'Simple Background Stats Type', value: 'stats1'},
                {title: 'Card Type Stats', value: 'stats2'},
                ]
            }
        },
        {
            name: 'background',
            title: 'background',
            type: 'background',
        }, 
        {
            name: 'caption',
            title: 'Heading',
            type: 'customText',
        },
        {
            name: 'tagLine',
            title: 'Tag Line Text',
            type: 'customText',
        },
        {
            name: 'statistics',
            title: 'Add Statistics Items',
            type: 'array',
            of: [
                {type: 'stat'}
            ]
        },
        {
            name: 'statItemColor',
            title: 'Add Statistics Items Color',
            type: 'color',
        },
        {
            name: 'margin',
            title: 'Select Margin',
            type: 'margin',
            description: 'Select Button Type and Fix the properties',
        },
    ],
    preview: {
        select: {
        },
        prepare({ heading, media }) {
          return {
            title: "Statistics",
            subtitle: 'Our Statistics',
          };
        },
      },

}