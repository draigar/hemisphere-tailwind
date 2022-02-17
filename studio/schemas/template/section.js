/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'pageSection',
    type: 'object',
    title: 'Section',
    fields: [
        {
            name: 'sectionType',
            type: 'string',
            title: 'Section Type',
            option:{
                list: [
                    {title: 'Image/Video Background Hero', value: 'imageVideoBgHero'},
                    {title: 'Video and Text Caption', value: 'videoAndTextCaption'},
                    {title: 'Image and Text Grid', value: 'imageAndTextGrid'},
                    {title: 'Newsletter', value: 'newsLetter'},
                    // {title: 'Team', value: 'team'},
                    {title: 'Partners', value: 'partners'},
                    // {title: 'Reviews', value: 'reviews'},
                    {title: 'Gallery', value: 'gallery'},
                    {title: 'Image Background and text-Card Overflow', value: 'imageBgandTextCardOverflow'},
                    {title: 'Cards and Caption', value: 'cardsAndCaptions'},
                    {title: 'Contact Us Form', value: 'contactUs'},
                    {title: 'Statistics', value: 'statistics'},
                    {title: 'Text Centered and Image Background', value: 'textCenteredAndImageBg'},
                    {title: 'Carousel', value: 'carousel'},
                ]
            },
            description: 'Select the type of section you want to appear on the page'
        },
        {
            name:'videoBgHeroSection',
            type:'imageVideoBgHeroComponent',
            title:'Configure Video Background Hero',
            hidden: ({parent}) => (parent?.sectionType !== 'imageVideoBgHero')
        },
        {
            name:'videoAndTextCaption',
            type:'videoAndTextCaption',
            title:'Configure Video And Text Caption',
            hidden: ({parent}) => (parent?.sectionType !== 'videoAndTextCaption')
        },
        {
            name:'imageAndTextGrid',
            type:'imageAndTextGrid',
            title:'Configure Image And Text Grid',
            hidden: ({parent}) => (parent?.sectionType !== 'imageAndTextGrid')
        },
        {
            name:'newsLetterSection',
            type:'newsletter',
            title:'Configure NewsLetter',
            hidden: ({parent}) => (parent?.sectionType !== 'newsLetter')
        },
        {
            name:'teamSection',
            // type:'team',
            title:'Configure Team Section',
            hidden: ({parent}) => (parent?.sectionType !== 'team')
        },
        {
            name:'partnersSection',
            type:'partners',
            title:'Configure Partners Section',
            hidden: ({parent}) => (parent?.sectionType !== 'partners')
        },
        {
            name:'reviewsSection',
            // type:'reviews',
            title:'Configure Reviews Section',
            hidden: ({parent}) => (parent?.sectionType !== 'reviews')
        },
        {
            name:'gallerySection',
            type:'gallery',
            title:'Configure Gallery Section',
            hidden: ({parent}) => (parent?.sectionType !== 'gallery')
        },
        {
            name:'imageBgandTextCardOverflowSection',
            type:'imageBgandTextCardOverflow',
            title:'Configure Image Background and text-Card Overflow',
            hidden: ({parent}) => (parent?.sectionType !== 'imageBgandTextCardOverflow')
        },
        {
            name:'cardsAndCaptionsSection',
            type:'cardsAndCaptions',
            title:'Configure Cards And Captions',
            hidden: ({parent}) => (parent?.sectionType !== 'cardsAndCaptions')
        },
        {
            name:'contactUsSection',
            type:'contact',
            title:'Configure Contact Us Section',
            hidden: ({parent}) => (parent?.sectionType !== 'contactUs')
        },
        {
            name:'statsSection',
            type:'statistics',
            title:'Configure Stats Section',
            hidden: ({parent}) => (parent?.sectionType !== 'statistics')
        },
        {
            name:'textCenteredandMediaBgSection',
            type:'textCenteredAndImageBg',
            title:'Configure Text Centered and Image Background',
            hidden: ({parent}) => (parent?.sectionType !== 'textCenteredAndImageBg')
        },
        {
            name:'carousel',
            type:'carousel',
            title:'Configure Carousel',
            hidden: ({parent}) => (parent?.sectionType !== 'carousel')
        },
    ]
}