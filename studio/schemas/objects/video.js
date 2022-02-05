export default {

    //TODO: Find out how to upload video directly on sanity studio, otherwise we will have to stream it form a source.
    title: 'Video Playback',
    name: 'video',
    type: 'object',
    fields: [
        {
            title: 'Video File',
            name: 'videoFile',
            type: 'file',
            options: {
                accept: 'video/mp4'
            },
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
            options: {
                isHighlighted: true
            }
        },
        {
            name: 'alt',
            title: 'Alternative text (for screen readers)',
            type: 'string',
            options: {
                isHighlighted: true
            }
        }
    ]
};