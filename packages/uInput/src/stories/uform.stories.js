import React from 'react';
import { registerFormField, connect } from '@uform/react-schema-renderer'
import {
  SchemaForm,
  } from '@uform/antd'
import { trim, beforeTrim } from 'cattle-util'
import { mapStyledProps, mapTextComponent } from '@uform/antd'
import { storiesOf } from '@storybook/react';
import UInput from '../index';
import Readme from '../README.md';
import Usage from '../USAGE.md';

// 正常为 'string'
registerFormField(
  'uInput',
  connect({
    getProps: (outputProps, fieldProps) => {
        mapStyledProps(outputProps, fieldProps);
        let value = trim(outputProps.value);
        if(outputProps.maxlen) {
          value = value.substring(0, outputProps.maxlen);
        }  
        outputProps.value =  value
    },
    getComponent: mapTextComponent
  })(UInput)
)

storiesOf('UInput', module)
  .addParameters({
    readme: {
      codeTheme: 'duotone-sea',
      content: Readme,
      sidebar: Usage,
    },
  })
  .add('uform', () => {
    return <SchemaForm schema={{
      "type": "object",
      "properties": {
        "length": {
          "type": "string",
          "x-component": "uInput",
          "title": "长度"
        }
      } 
    }} />
  })
