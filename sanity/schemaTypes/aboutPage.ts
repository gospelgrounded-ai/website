import { defineType, defineField } from 'sanity';

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About page',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'From milk to meat',
    }),
    defineField({
      name: 'intro',
      title: 'Intro (under the heading)',
      type: 'text',
      rows: 3,
      initialValue:
        'Gospel Grounded is a teaching ministry built on a single conviction: the Body of Christ was made for maturity. This is a call to grow up into all that Christ has for you.',
    }),
    defineField({
      name: 'bio',
      title: 'Bio paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      initialValue: [
        'Gospel Grounded exists to help believers grow from spiritual milk to spiritual meat. The ministry was born from a single, unshakable conviction — one Webster found waiting for him in Hebrews 5:12–14: the Body of Christ was made for maturity, not perpetual infancy.',
        'That conviction soon grew into a burden: to equip the Body of Christ and raise up disciples who are spiritually mature.',
        'Gospel Grounded is not simply a nice moniker; it’s a war cry against the forces of hell. It’s a cry that exists to build believers who can be confident that they will one day hear the words, “Well done, good and faithful servant.”',
      ],
    }),
    defineField({
      name: 'values',
      title: 'Core values',
      type: 'array',
      of: [
        defineField({
          name: 'value',
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'body', title: 'Body', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title', subtitle: 'body' } },
        }),
      ],
      initialValue: [
        { title: 'Gospel-centred', body: 'Everything starts and ends with the finished work of Jesus. The gospel is not just the door — it is the whole house.' },
        { title: 'Bible-faithful', body: 'We take Scripture seriously: studied carefully, handled honestly, and trusted as the very word of God.' },
        { title: 'Clear, not clever', body: 'Deep truth does not have to be dense. We aim for clarity that serves you, not jargon that impresses.' },
        { title: 'For everyone', body: 'Lifelong believer or first-time seeker — there is room for your questions and a welcome for you here.' },
      ],
    }),
    defineField({
      name: 'beliefs',
      title: 'What we believe',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'The Bible is the inspired, trustworthy word of God.',
        'There is one God, eternally Father, Son, and Holy Spirit.',
        'Jesus Christ is fully God and fully man, crucified and risen.',
        'Salvation is by grace alone, through faith alone, in Christ alone.',
        'The Holy Spirit indwells and transforms every believer.',
        'Jesus will return, and his kingdom has no end.',
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'About page' }) },
});
