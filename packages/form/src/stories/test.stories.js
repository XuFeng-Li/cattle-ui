import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import {CtTimeRange, CtInput, CtTextArea, CtRangePicker, CtCascader, CtSelect, CtUpload, CtCombinInput, CtCombinSelect} from '../index';
import Readme from '../README.md';
import Usage from '../USAGE.md';

storiesOf('Form', module)
  .addParameters({
    readme: {
      codeTheme: 'duotone-sea',
      content: Readme,
      sidebar: Usage,
    },
  })
  .add('CtTimeRange', () => <Fragment><CtTimeRange/>121313</Fragment>)
  .add('CtInput', () => <Fragment><CtInput/></Fragment>)
  .add('CtTextArea', () => <Fragment><CtTextArea/></Fragment>)
  .add('CtRangePicker', () => <Fragment><CtRangePicker/></Fragment>)
  .add('CtCascader', () => <Fragment><CtCascader/></Fragment>)
  .add('CtSelect', () => <Fragment><CtSelect/></Fragment>)
  .add('CtUpload', () => <Fragment><CtUpload/></Fragment>)
  .add('CtCombinInput', () => <Fragment><CtCombinInput/></Fragment>)
  .add('CtCombinSelect', () => <Fragment><CtCombinSelect/></Fragment>)
