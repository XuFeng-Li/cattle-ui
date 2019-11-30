import { storiesOf } from '@storybook/react';

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