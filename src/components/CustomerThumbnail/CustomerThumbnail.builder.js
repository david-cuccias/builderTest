import { Builder } from '@builder.io/react';
import { CustomerThumbnail } from './CustomerThumbnail';

Builder.registerComponent(CustomerThumbnail, {
  name: 'Customer Thumbnail',
  // Optionally give a custom icon (image url - ideally a black on transparent bg svg or png)
  image:
    'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fd6d3bc814ffd47b182ec8345cc5438c0',
  inputs: [
    {
      name: 'title',
      type: 'string',
      required: true,
      defaultValue: 'Your Title Here'
    },
    {
      name: 'image',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      required: true,
      defaultValue:
        'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F52dcecf48f9c48cc8ddd8f81fec63236'
    },
    {
      name: 'link',
      type: 'string',
      required: true,
      defaultValue: 'https://example.com'
    },
    {
      name: 'text',
      type: 'string',
      required: true,
      defaultValue: 'Text'
    },
    {
      name: 'calloutLabel',
      type: 'string'
    },
    {
      name: 'calloutValue',
      type: 'string'
    }
  ]
});
