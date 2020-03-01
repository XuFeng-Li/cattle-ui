import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomImg from '../index';
import Readme from '../README.md';
import Usage from '../USAGE.md';


storiesOf('CustomImg', module)
  .addParameters({
    readme: {
      codeTheme: 'duotone-sea',
      content: Readme,
      sidebar: Usage,
    },
  })
  .add('simple', () => {
    return <CustomImg /> 
  })
