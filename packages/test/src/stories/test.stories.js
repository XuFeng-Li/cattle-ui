import React from 'react';
import { storiesOf } from '@storybook/react';

import Test from '../index';
import { InputButton } from 'test-ts-zlb';
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
  .add('测试test_ts', () => (
    <InputButton variant="alert" label={'Hello Im Button'}>999</InputButton>
  ));
