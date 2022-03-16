import { Builder } from '@builder.io/react';
import { Quote } from './Quote';

Builder.registerComponent(Quote, {
  name: 'Quote',
  // Optionally give a custom icon (image url - ideally a black on transparent bg svg or png)
  image:
    'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fd6d3bc814ffd47b182ec8345cc5438c0',
  inputs: [
    {
      name: 'wrapperVariant',
      type: 'string',
      defaultValue: 'transparent',
      enum: ['transparent', 'flame']
    },
    {
      name: 'quoteAuthor',
      type: 'string',
      required: true,
      defaultValue: 'Author'
    },
    {
      name: 'quoteAuthorTitle',
      type: 'string',
      required: true,
      defaultValue: 'Author title'
    },
    {
      name: 'quoteBody',
      type: 'string',
      required: true,
      defaultValue: 'Quote body'
    },
    {
      name: 'quoteLogo',
      type: 'string',
      defaultValue: 'Quote logo'
    },
    {
      name: 'quoteee',
      type: 'string',
      defaultValue: 'Quotee'
    },
    {
      name: 'quoteeeInfo',
      type: 'string',
      defaultValue: 'Quotee info'
    }
  ]
});
