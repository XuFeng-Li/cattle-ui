import React from 'react';
import { storiesOf } from '@storybook/react';
import PanelSelect from '../index';
import Readme from '../README.md';
import Usage from '../USAGE.md';


storiesOf('PanelSelect', module)
  .addParameters({
    readme: {
      codeTheme: 'duotone-sea',
      content: Readme,
      sidebar: Usage,
    },
  })
  .add('simple', () => {
    return <PanelSelect>
      <PanelSelect.Option key="1">1</PanelSelect.Option>
      <PanelSelect.Option key="2">2</PanelSelect.Option>
    </PanelSelect>
  })
