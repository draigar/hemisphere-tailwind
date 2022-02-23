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
                    {title: 'Card And Captions Horizontal Type', value: 'horizontal'},
                    {title: 'Card And Captions Vertical Type Block Image', value: 'verticalBlockImage'},
                    {title: 'Card And Captions Vertical Type Rounded Image', value: 'verticalRoundedImage'},
                ]
            }
        },
        {
            title: 'Background',
            name: 'background',
            type: 'color',
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
            ],
            validation: Rule => [
                Rule.required().min(2).max(4).error('Card Type is required, cannot be less than 2 and more than 4')
            ],
        },
        {
            name: 'isReview',
            title: 'Add Review Mark',
            type: 'boolean',
            description: 'Add Review Mark to use as a Review style',
        },
        {
            name: 'shadow',
            title: 'Drop shadow',
            type: 'boolean',
            description: 'Should have a drop shadow',
        },
        {
            name: 'isAnimationEnabled',
            title: 'Enable Animation',
            type: 'boolean',
            description: 'Enable animation on component',
        },
        {
            name: 'animation',
            type: 'animations',
            hidden: ({ parent }) => !(parent?.isAnimationEnabled),
        }
    
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