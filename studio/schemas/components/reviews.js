import { type } from "os";

export default {
    name: 'reviews',
    type: 'object',
    description: 'Reviews',
    fields:[
        {
        name:'type',
        title: 'Component Type',
        type: 'string',
        options:{
            list: [
                {title: 'Reviews Type 1', value: 'reviews1'},
                {title: 'Reviews Type 2', value: 'reviews2'},
                {title: 'Reviews Type 3', value: 'reviews3'},
                ]
            }
        },
        // {
        //     name: 'isCustomBg',
        //     title: 'Change Background',
        //     type: 'boolean',
        //     description: 'Enable if you want to change the background from the default',
        // },
        {
            name: 'background',
            type: 'background',
            title: 'Background',
            hidden: ({parent}) => !(parent?.isCustomBg),
            description: 'Set the Background you want on this component',
        },
        {
            name: 'heading',
            title: 'Add Heading',
            type: 'customText',
        },
        {
            name: 'reviewers',
            title: 'Add Reviewer Logo',
            type: 'array',
            of: [
                {type: 'reviewer'}
            ]
        },
    
    ],
    preview: {
        select: {
        },
        prepare({ heading, media }) {
          return {
            title: "Our Reviews",
            subtitle: 'Reviews from customers',
          };
        },
      },

}