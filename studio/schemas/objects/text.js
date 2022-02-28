/* eslint-disable import/no-anonymous-default-export */
export default {
  type: 'object',
  name: 'customText',
  title: 'Text',
  fields: [
    {
      title: 'Text Input',
      name: 'text',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Title', value: 'title' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'H5', value: 'h5' },
            { title: 'H6', value: 'h6' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                title: 'Color',
                name: 'color',
                type: 'color',
              },
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                  {
                    name: 'linkType',
                    type: 'string',
                    options: {
                      list: [
                        { title: "Internal Link", value: "internal" },
                        { title: "External Url", value: "external" },
                      ],
                      layout: 'radio'
                    },
                    initialValue: 'internal'
                  },
                  {
                    title: 'Internal Link',
                    name: 'internalLink',
                    description: 'Select pages or routes for navigation',
                    type: 'reference',
                    to: [{ type: 'page' }],
                    hidden: ({ parent }) => !(parent?.linkType === 'internal')
                  },
                  {
                    name: 'externalUrl',
                    title: 'External URL',
                    description: "Use fully qualified URLS for external link",
                    type: 'url',
                    hidden: ({ parent }) => !(parent?.linkType === 'external')
                  },
                  {
                    name: 'newWindow',
                    title: 'Open in New Window',
                    type: 'boolean',
                    hidden: ({ parent }) => !(parent?.linkType === 'external')
                  },
                ]
              },
              {
                title: 'font',
                name: 'font-type',
                type: 'object',
                fields: [
                  {
                    title: "Font Name",
                    name: "type",
                    type: "string",
                    options: {
                      list: [
                        { title: "Helvetica", value: "helvetica" },
                        { title: "Nueue", value: "helvetica-nueue" },
                      ]
                    }
                  },
                ]
              },
            ]
          },
        },
        { type: 'imageObject' },
      ],
    },
    {
      name: 'lengthSize',
      type: 'size',
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
  ]
};
