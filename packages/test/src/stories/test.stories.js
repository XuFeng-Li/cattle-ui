import React from 'react';
import { storiesOf } from '@storybook/react';

import Test from '../index';
import Readme from '../README.md';
import Usage from '../USAGE.md';

storiesOf('Button', module)
  .addParameters({
    readme: {
      codeTheme: 'duotone-sea',
      content: Readme,
      sidebar: Usage,
    },
  })
  .add('Button', () => <Test label={'Hello Im Button'} />)
  .add('Alert Button', () => (
    <Test variant="alert" label={'Hello Im Button'} />
  ))
  .add('Success Button', () => (
    <Test variant="success" label={'Hello Im Button'} />
  ));
