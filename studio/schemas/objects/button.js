/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Button',
  name: 'button',
  type: 'object',
  validation: Rule =>
    Rule.custom(
      (fields = {}) =>
        !fields.route || !fields.link || 'Only one link type is allowed'
    ),
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
    },
  ],
  fields: [
    {
      title: "Button Type",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Default Button", value: "default" },
          { title: "Outlined Button", value: "outlined" },
          { title: "Decorative Button", value: "decorative" },
          { title: "HyperLink", value: "hyperlink" },
          { title: "Ghost", value: "ghost" },
        ]
      }
    },
    {
      title: 'Text',
      name: 'buttontext',
      type: 'string',
      validation: Rule => [
        Rule.max(10).error('Text should be less than 10')
      ]
    },
    {
      title: 'Button Text Color',
      name: 'buttonColor',
      type: 'color',
    },
    {
      title: 'Background Color',
      name: 'backgroundColor',
      type: 'color',
      hidden: ({ parent }) => (parent?.type === "hyperlink") || (parent?.type === "ghost") || (parent?.type === "outlined")
    },
    {
      title: 'Secondary Background Color',
      name: 'secondaryBackgroundColor',
      type: 'color',
      hidden: ({ parent }) => (!parent?.type.value === "decorative")
    },

    {
      title: 'Border',
      name: 'border',
      type: 'boolean',
      hidden: ({ parent }) => (parent?.type === "hyperlink") || (parent?.type === "ghost") || (parent?.type === "outlined")
    },
    {
      title: 'Border Color',
      name: 'borderColor',
      type: 'color',
      hidden: ({ parent }) => !parent?.border && parent?.type !== "outlined"
    },
    {
      title: 'Link ',
      description: 'Use this to link button to a route',
      name: 'buttonLink',
      type: 'link',
      validation: Rule => [
        Rule.required().error('where does the button lead to')
      ],
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
  //TODO: Handle Previews in Sanity Schemas
  // preview: {
  //   select: {
  //     title: 'title',
  //     routeTitle: 'buttonLink.title',
  //     slug: 'buttonLink.slug.current',
  //     link: 'link',
  //   },
  //   prepare({ title, routeTitle = '', slug, link }) {
  //     const subtitleExtra = slug
  //       ? `Slug:/${slug}/`
  //       : link
  //       ? `External link: ${link}`
  //       : 'Not set';
  //     return {
  //       title: `${title}`,
  //       subtitle: `${routeTitle} ${subtitleExtra}`,
  //     };
  //   },
  // },
};
