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
                {title: 'Statistics Type 1', value: 'stats1'},
                {title: 'Statistics Type 2', value: 'stats2'},
                {title: 'Statistics Type 3', value: 'stats3'},
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
        } 
    
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