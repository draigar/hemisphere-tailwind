/* eslint-disable import/no-anonymous-default-export */
import {isUniqueAcrossAllDocuments} from '../../lib/isUniqueAcrossAllDocuments'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'A unique identifier for the page url',
      options: {
        source: 'title',
        isUnique: isUniqueAcrossAllDocuments,
        validation: Rule => Rule.required().warning('A slug is required'),
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        {type: 'imageVideoBgHeroComponent'},
        {type: 'videoAndTextCaption'},
        {type: 'imageAndTextGrid'},
        {type: 'newsletter'},
        // {type: 'team'},
        {type: 'partners'},
        // {type: 'reviews'},
        {type: 'gallery'},
        {type: 'imageBgandTextCardOverflow'},
        {type: 'cardsAndCaptions'},
        {type: 'contact'},
        {type: 'statistics'},
        {type: 'textCenteredAndImageBg'},
        {type: 'carousel'},
        { type: 'article' },
        {type: 'breakPoint' }
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description is for the page',
    },
    {
      name: 'seodescription',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
};
