export default {
    type: 'object',
    name: 'bodyText',
    title: 'Text',
    fields: [
      {
        name: 'Text',
        type: 'text',
        title: 'Text',
      },
      {
        title: "Type",
        name: "type",
        type: "string",
        options: {
          list: [
            { title: "Extra Large", value: "extraLarge" },
            { title: "Large", value: "large" },
            { title: "Medium", value: "medium" },
            { title: "Small", value: "small" },
            { title: "Very Small", value: "verySmall" },
          ]
        }
      },
      {
        name: 'maxWidth',
        type: 'number',
        title: 'Max Width',
      },
      {
        title: 'Color',
        name: 'color',
        type: 'colors',
      },
      {
        title: 'Font',
        name: 'font',
        type: 'font',
      },
    ]
  };
  