/* eslint-disable import/no-anonymous-default-export */
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
                { title: 'Simple background and form', value: 'newsletter1' },
                { title: 'Text and form Grid newsletter', value: 'newsletter5' },
                { title: 'Text and Image Grid Newsletter', value: 'newsletter4' },
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
        {
            name:'buttonPosition',
            title: 'Button Position',
            type: 'string',
            options:{
                list: [
                    { title: 'Input Left', value: 'left' },
                    { title: 'Input Center', value: 'center' },
                    { title: 'Input Right', value: 'right' },
                    ]
                },
            hidden: ({parent}) => (parent?.type === 'newsletter4' )
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