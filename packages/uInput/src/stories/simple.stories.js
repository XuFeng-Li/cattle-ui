import React from 'react';
import { storiesOf } from '@storybook/react';
import UInput from '../index';
import Readme from '../README.md';
import Usage from '../USAGE.md';

storiesOf('UInput', module)
  .addParameters({
    readme: {
      codeTheme: 'duotone-sea',
      content: Readme,
      sidebar: Usage,
    },
  })
  .add('simple', () => <UInput placeholder="simple" />)
