import { type } from "os";

export default {
    name: 'team',
    type: 'object',
    description: 'Team',
    fields:[
        {
        name:'type',
        title: 'Component Type',
        type: 'string',
        options:{
            list: [
                {title: 'Team Type 1', value: 'team1'},
                {title: 'Team Type 2', value: 'team2'},
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
            name: 'members',
            title: 'Add Team Member',
            type: 'array',
            of: [
                {type: 'teamMember'}
            ]
        },
    
    ],
    preview: {
        select: {
        },
        prepare({ heading, media }) {
          return {
            title: "Team Members",
            subtitle: 'Meet the team',
          };
        },
      },

}