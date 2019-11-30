import { storiesOf } from '@storybook/react';
import Test from '../index';
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
  .add('simple', () => <Test label={'Hello Im Button'} />)
