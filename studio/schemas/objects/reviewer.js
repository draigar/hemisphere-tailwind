export default {
    name: 'reviewer',
    title: '',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Select Portfolio Image',
            type: 'imageObject',
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'review',
            title: 'Review',
            type: 'bodyText',
        }
    ],
    preview: {
        select: {
          media: 'Image',
        },
        prepare({ title, media }) {
          return {
            title: "Reviewer",
            media,
          };
        },
      },
}