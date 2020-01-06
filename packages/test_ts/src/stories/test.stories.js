import React from 'react';
import { storiesOf } from '@storybook/react';

import { InputButton } from '../index';
import Readme from '../README.md';
import Usage from '../USAGE.md';

storiesOf('Test_ts', module)
  .addParameters({
    readme: {
      codeTheme: 'duotone-sea',
      content: Readme,
      sidebar: Usage,
    },
  })
  .add('Button', () => <InputButton label={'Hello Im Button'} />)
