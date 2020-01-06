import React from 'react';
import { storiesOf } from '@storybook/react';
import PanelInput from '../index';
import Readme from '../README.md';
import Usage from '../USAGE.md';

storiesOf('PanelInput', module)
  .addParameters({
    readme: {
      codeTheme: 'duotone-sea',
      content: Readme,
      sidebar: Usage,
    },
  })
  .add('simple', () => <PanelInput placeholder="simple" />)
