import { type } from "os";

export default {
    name: 'newsletter',
    type: 'object',
    description: 'Newsletter',
    fields:[
        {
        name:'type',
        title: 'Newsletter Type',
        type: 'string',
        options:{
            list: [
                { title: 'Full View Height Design', value: 'newsletter1' },
                { title: '1/2 View Height Design', value: 'newsletter2' },
                { title: '1/4 View Height Design', value: 'newsletter3' },
                { title: 'Text and Image Grid', value: 'newsletter4' },
                ]
            }
        },
        {
            name: 'image',
            title: 'Select Image',
            type: 'imageObject',
            hidden: ({ parent }) => !(parent?.type === 'newsletter4')
        },
        {
            name: 'background',
            title: 'background',
            type: 'background',
            hidden: ({ parent }) => (parent?.type === 'newsletter4')
        }, 
        {
            name: 'headLine',
            title: 'HeadLine',
            type: 'customText',
        },
        {
            name: 'tagline',
            title: 'Brief TagLine',
            type: 'customText',
        },
        {
            name: 'inputElement',
            title: 'Input Settings',
            type: 'formField',
        }, 
        {
            name: 'buttonType',
            title: 'Select Button Type',
            type: 'button',
            description: 'Select Button Type and Fix the properties',
        },
    
    ],
    preview: {
        select: {
        //   media: 'images',
        },
        prepare({ heading, media }) {
          return {
            title: "Newsletter Section",
            subtitle: 'Subscribe for news',
            // media,
        };
        },
    },

}