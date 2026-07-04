import { defineType, defineField } from 'sanity';

export const playlist = defineType({
  name: 'playlist',
  title: 'Spotify playlist',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description (optional)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'spotifyUrl',
      title: 'Spotify share link',
      description:
        'In Spotify, open the playlist → ⋯ → Share → Copy link, and paste it here.',
      type: 'url',
      validation: (rule) =>
        rule.required().uri({ scheme: ['https'] }),
    }),
    defineField({
      name: 'order',
      title: 'Order (lower shows first — optional)',
      type: 'number',
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'spotifyUrl' } },
});
