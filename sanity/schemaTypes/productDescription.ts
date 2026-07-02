import { defineType, defineField } from 'sanity';

export const productDescription = defineType({
  name: 'productDescription',
  title: 'Product description',
  type: 'document',
  fields: [
    defineField({
      name: 'productName',
      title: 'Product name (must match the Printful product name exactly)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: { select: { title: 'productName', subtitle: 'description' } },
});
