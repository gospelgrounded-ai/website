import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroBadge',
      title: 'Hero badge',
      type: 'string',
      initialValue: 'Faith · Theology · Gospel teaching',
    }),
    defineField({
      name: 'heroHeading',
      title: 'Hero heading',
      type: 'string',
      initialValue: 'Stay grounded in the',
    }),
    defineField({
      name: 'heroHeadingAccent',
      title: 'Hero heading — highlighted word (shown in teal)',
      type: 'string',
      initialValue: 'gospel',
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Hero subtext',
      type: 'text',
      rows: 3,
      initialValue:
        'Helping believers grow from spiritual milk to spiritual meat. Clear, daily teaching through Scripture — equipping the Body of Christ for maturity, not perpetual infancy.',
    }),
    defineField({
      name: 'stats',
      title: 'Homepage stats',
      type: 'array',
      of: [
        defineField({
          name: 'stat',
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        }),
      ],
      initialValue: [
        { value: '500+', label: 'Teachings published' },
        { value: '240K+', label: 'Views and counting' },
        { value: 'Daily', label: 'New teaching' },
        { value: '1', label: 'Gospel, unchanging' },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Site settings' }) },
});
