export default {
    name: 'teamMember',
    title: '',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Select Portfolio Image',
            type: 'image',
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'jobPosition',
            title: 'Job Position',
            type: 'string',
        },
        {
            name: 'shortDescription',
            title: 'Short Description',
            type: 'bodyText',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        },
    ],
    preview: {
        select: {
        //   title: 'card',
          media: 'image',
        },
        prepare({ title, media }) {
          return {
            title: "Team Member",
            subtitle: "Team Member",
            media,
          };
        },
      },
}