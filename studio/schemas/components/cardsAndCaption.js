/* eslint-disable import/no-anonymous-default-export */
import { type } from "os";

export default {
    name: 'cardsAndCaptions',
    type: 'object',
    title: 'Card And Captions',
    fields:[
        {
        name:'type',
        title: 'Component Type',
        type: 'string',
        options:{ 
            list: [
                    {title: 'Card And Captions Type 1(image above, text below)', value: 'cardblog1'},
                    {title: 'Card And Captions Type 2(image and image side by side)', value: 'cardblog2'},
                    {title: 'Card And Captions Type 3(image above, text below with box shadow)', value: 'cardsection1'},
                ]
            }
        },
        {
            title: 'Background',
            name: 'background',
            type: 'colors',
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'customText',
        },
        {
            name: 'captionText',
            title: 'Caption Text',
            type: 'customText',
        },
        {
            name: 'cards',
            title: 'Add Card',
            type: 'array',
            of: [
                {type: 'card'}
            ]
        },
        {
            name: 'shadow',
            title: 'Drop shadow',
            type: 'boolean',
            description: 'Should have a drop shadow',
        },
    
    ],
    preview: {
        select: {
        //   title: 'type',
        },
        prepare({ title, media }) {
          return {
            title: "Card And Captions",
            subtitle: 'Card',
          };
        },
      },

}