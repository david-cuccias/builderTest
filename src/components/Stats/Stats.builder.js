import { Builder } from '@builder.io/react';
import { Stats } from './Stats';

Builder.registerComponent(Stats, {
  name: 'Stats',
  // Optionally give a custom icon (image url - ideally a black on transparent bg svg or png)
  inputs: [
    {
      name: 'large1',
      type: 'string',
      defaultValue: 'Large',
      required: true
    },
    {
      name: 'small1',
      type: 'string',
      defaultValue: 'Small',
      required: true
    },
    {
      name: 'large2',
      type: 'string',
      defaultValue: 'Large',
      required: true
    },
    {
      name: 'small2',
      type: 'string',
      defaultValue: 'Small',
      required: true
    },
    {
      name: 'large3',
      type: 'string',
      defaultValue: 'Large',
      required: true
    },
    {
      name: 'small3',
      type: 'string',
      defaultValue: 'Small',
      required: true
    }
  ]
});
