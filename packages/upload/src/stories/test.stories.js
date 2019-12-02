import React from 'react';
import { storiesOf } from '@storybook/react';
import Upload from '../index';
import Readme from '../README.md';
import Usage from '../USAGE.md';

storiesOf('Upload', module)
  .addParameters({
    readme: {
      codeTheme: 'duotone-sea',
      content: Readme,
      sidebar: Usage,
    },
  })
  .add('simple', () => <Upload label={'Hello Im Button'} />)
