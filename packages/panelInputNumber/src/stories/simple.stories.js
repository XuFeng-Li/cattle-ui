import React from 'react';
import { storiesOf } from '@storybook/react';
import PanelInputNumber from '../index';
import Readme from '../README.md';
import Usage from '../USAGE.md';

storiesOf('PanelInputNumber', module)
  .addParameters({
    readme: {
      codeTheme: 'duotone-sea',
      content: Readme,
      sidebar: Usage,
    },
  })
  .add('simple', () => <PanelInputNumber placeholder="simple" />)
