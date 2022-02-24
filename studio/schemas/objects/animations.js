/* eslint-disable import/no-anonymous-default-export */
export default {
    title: 'Animations',
    name: 'animations',
    type: 'object',
    fields: [
        {
            title: 'Animation name',
            name: 'animationName',
            type: 'string',
            options: {
                list: [
                    {title: 'Zoom In', value: 'animate__zoomIn'},
                    {title: 'Slide In Up', value: 'animate__slideInUp'},
                    {title: 'Fade In', value: 'animate__fadeIn'},
                    {title: 'Fade In Up', value: 'animate__fadeInUp'},
                ]
            },
        },
        {
            title: 'Animation duration',
            name: 'animationDuration',
            type: 'string',
        },
        {
            title: 'Animation delay',
            name: 'animationDelay',
            type: 'string',
        },
        {
            title: 'Animation offset',
            name: 'animationOffset',
            type: 'string',
        }
    ]
}